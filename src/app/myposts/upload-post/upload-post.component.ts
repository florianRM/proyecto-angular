import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MypostService } from '../mypost.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    img: ['', Validators.required],
    categories: this.fb.array([], Validators.required),
    fileSource: ['']
  })
  newCategory: FormControl = this.fb.control('', Validators.required);
  categoriesForm: any[] = [];
  addedCategories: any[] = [];

  json: any = {
    title: '',
    description: '',
    category: []
  }

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private dialog: MatDialogRef<UploadPostComponent>, private myPostService: MypostService) { }

  uploaded: boolean = false;
  file!: File | null;

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe({
      next: res => this.categoriesForm = res
    })
  }

  get categories() {
    return this.myForm.get('categories') as FormArray;
  }

  addCategory(event: any): void {
    let text = event.target.options[event.target.options.selectedIndex].text;
    this.addedCategories.push(text);
    this.categories.push(this.fb.control(this.newCategory.value, Validators.required))
    this.newCategory.reset();
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
    this.myForm.patchValue({
      fileSource: this.file
    })
    this.uploaded = true;
  }

  closeModal(): void {
    this.dialog.close();
  }

  uploadPost(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }

    this.json.title = this.myForm.get('title')?.value;
    this.json.description = this.myForm.get('description')?.value;
    const categories = this.myForm.get('categories')?.value;
    for(let i=0; i < categories.length; i++) {
      this.json.category.push({id: categories[i]})
    }
    
    const file: File = this.myForm.get('fileSource')?.value;
    this.myPostService.uploadPost(this.json, file)
    .subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Successful Upload',
          text: `Image with name ${res.name} has been uploaded`,
          showConfirmButton: true
        }).then(resp => {
          if(resp.isConfirmed) {
            this.closeModal();
          }
        })
      },
      error: err => console.log(err)
    });
  }

}
