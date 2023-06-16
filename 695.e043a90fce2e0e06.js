"use strict";(self.webpackChunkProyectoAngular=self.webpackChunkProyectoAngular||[]).push([[695],{7695:(N,f,c)=>{c.r(f),c.d(f,{MypostsModule:()=>L});var g=c(4755),m=c(6868),t=c(2223),u=c(9166),_=c(5227),r=c(5030),C=c(5226),d=c.n(C),y=c(4655),p=c(4325);function x(o,s){if(1&o&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function v(o,s){if(1&o&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&o){const e=s.$implicit;t.xp6(2),t.Oqu(e)}}function P(o,s){1&o&&(t.TgZ(0,"small",24),t._uU(1,"You must select at least 1 category"),t.qZA())}function b(o,s){1&o&&(t.TgZ(0,"small",24),t._uU(1,"The image is required"),t.qZA())}function M(o,s){1&o&&t._UZ(0,"i",25)}let O=(()=>{class o{constructor(e,n,i,l,a){this.categoryService=e,this.dynamicDialogRef=n,this.fb=i,this.postService=l,this.router=a,this.myForm=this.fb.group({description:[""],img:["",r.kI.required],categories:this.fb.array([],r.kI.required),fileSource:[""]}),this.newCategory=this.fb.control("",r.kI.required),this.categoriesForm=[],this.addedCategories=[],this.mimeTypesAllowed=["image/jpeg","image/jpg","image/png","image/svg","image/webp"],this.json={title:"",description:"",category:[]},this.uploaded=!1}ngOnInit(){this.categoryService.getCategories().subscribe({next:e=>this.categoriesForm=e})}get categories(){return this.myForm.get("categories")}addCategory(e){let n=e.target.options[e.target.options.selectedIndex].text;this.addedCategories.includes(n)||(this.addedCategories.push(n),this.categories.push(this.fb.control(this.newCategory.value,r.kI.required))),this.newCategory.reset()}onFileChange(e){this.file=e.target.files[0],null!=this.file&&null!=this.file&&(this.file.size>1048576?(d().fire({icon:"error",title:"Wow, an error has occurred",text:"Images larger than 1 mb are not allowed"}),this.file=null):this.mimeTypesAllowed.includes(this.file?.type)?(this.myForm.patchValue({fileSource:this.file}),this.uploaded=!0):(d().fire({icon:"error",title:"Wow, an error has occurred",text:"The mimetype are not allowed"}),this.file=null))}isValidField(e){return this.myForm.controls[e].invalid&&this.myForm.controls[e].touched}closeDialog(){this.dynamicDialogRef.close()}uploadPost(){if(this.myForm.invalid)return void this.myForm.markAllAsTouched();this.json.title=this.myForm.get("title")?.value,this.json.description=this.myForm.get("description")?.value;const e=this.myForm.get("categories")?.value;for(let i=0;i<e.length;i++)this.json.category.push({id:e[i]});const n=this.myForm.get("fileSource")?.value;this.postService.uploadPost(this.json,n).subscribe({next:i=>{d().fire({icon:"success",title:"Successful Upload",text:"Image has been uploaded",showConfirmButton:!0}).then(l=>{l.isConfirmed&&(this.closeDialog(),this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/myposts"])}))})},error:i=>{}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y.H),t.Y36(p.E7),t.Y36(r.qu),t.Y36(u.L),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-upload-post"]],decls:37,vars:8,consts:[[1,"mycontainer"],[1,"containerImg"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],[1,"form-group"],["for","description"],["name","description","cols","30","rows","5","formControlName","description",1,"description"],["for","category"],[1,"requiredField"],[1,"infoMessage"],["name","category",1,"category",3,"formControl","change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["class","errorMessage",4,"ngIf"],[1,"dropzone"],["type","file","id","fileDropRef","formControlName","img",3,"change"],["for","fileDropRef"],[1,"file"],[1,"info"],[1,"name"],["class","bi bi-check-lg",4,"ngIf"],[1,"formButtons"],["type","submit",1,"submitButton"],["type","button",1,"cancelButton",3,"click"],[3,"value"],[1,"errorMessage"],[1,"bi","bi-check-lg"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.uploadPost()}),t.TgZ(3,"div",3)(4,"label",4),t._uU(5,"Description"),t.qZA(),t._UZ(6,"textarea",5),t.qZA(),t.TgZ(7,"div",3)(8,"label",6),t._uU(9,"Category"),t.TgZ(10,"span",7),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"small",8),t._uU(13,"(You must choose at least 1 category)"),t.qZA(),t.TgZ(14,"select",9),t.NdJ("change",function(l){return n.addCategory(l)}),t.YNc(15,x,2,2,"option",10),t.qZA(),t.YNc(16,v,3,1,"div",11),t.YNc(17,P,2,0,"small",12),t.qZA(),t.TgZ(18,"div",13)(19,"input",14),t.NdJ("change",function(l){return n.onFileChange(l)}),t.qZA(),t.TgZ(20,"h3"),t._uU(21,"Drag and drop file here"),t.qZA(),t.TgZ(22,"h3"),t._uU(23,"or"),t.qZA(),t.TgZ(24,"label",15),t._uU(25,"Browse for file"),t.qZA()(),t.YNc(26,b,2,0,"small",12),t.TgZ(27,"div",16)(28,"div",17)(29,"h4",18),t.YNc(30,M,1,0,"i",19),t._uU(31),t.qZA()()(),t.TgZ(32,"div",20)(33,"button",21),t._uU(34,"Upload"),t.qZA(),t.TgZ(35,"button",22),t.NdJ("click",function(){return n.closeDialog()}),t._uU(36,"Cancel"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.myForm),t.xp6(12),t.Q6J("formControl",n.newCategory),t.xp6(1),t.Q6J("ngForOf",n.categoriesForm),t.xp6(1),t.Q6J("ngForOf",n.addedCategories),t.xp6(1),t.Q6J("ngIf",n.isValidField("categories")),t.xp6(9),t.Q6J("ngIf",n.isValidField("img")),t.xp6(4),t.Q6J("ngIf",n.uploaded),t.xp6(1),t.hij("",null==n.file?null:n.file.name," "))},dependencies:[g.sg,g.O5,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.oH,r.sg,r.u],styles:[".mycontainer[_ngcontent-%COMP%]{width:35vw;position:relative;z-index:2;overflow:hidden}.errorMessage[_ngcontent-%COMP%]{color:red}.infoMessage[_ngcontent-%COMP%]{font-style:italic}.bi-x-circle[_ngcontent-%COMP%]{font-size:24px}.header[_ngcontent-%COMP%]{display:flex;justify-content:center}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}.dropzone[_ngcontent-%COMP%]{width:100%;height:200px;padding:2rem;text-align:center;border:dashed 1px #979797;position:relative;margin:O auto}.dropzone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.dropzone[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;border-radius:5px;background-color:#4473ff;padding:10px}.bi-check-lg[_ngcontent-%COMP%]{color:green;font-size:20px}.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#38424c}.file[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:16px}.formButtons[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px;margin:0}.formButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:7px 20px;margin:0 0 0 25px;border:none;border-radius:5px;color:#fff}.formButtons[_ngcontent-%COMP%]   .submitButton[_ngcontent-%COMP%]{background-color:green}.formButtons[_ngcontent-%COMP%]   .cancelButton[_ngcontent-%COMP%]{background-color:red}@media only screen and (max-width:480px){.mycontainer[_ngcontent-%COMP%]{width:90vw}}"]}),o})();var Z=c(5289);let w=(()=>{class o{constructor(e,n,i,l){this.fb=e,this.config=n,this.postService=i,this.dynamicDialogRef=l,this.post=n.data.post}ngOnInit(){this.myForm=this.fb.group({description:[`${this.post.description}`]})}isValidField(e){return this.myForm.controls[e].invalid&&this.myForm.controls[e].touched}save(){this.myForm.invalid||this.postService.editPost(this.post.id,this.myForm.value).subscribe({next:()=>{d().fire({icon:"success",title:"Success",text:"The post was edited correctly"}).then(n=>{n.isConfirmed&&this.closeDialog()})},error:n=>{d().fire({icon:"error",title:"An error ocurred",text:n.error.message})}})}closeDialog(){this.dynamicDialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(p.S),t.Y36(u.L),t.Y36(p.E7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-post-dialog"]],decls:11,vars:1,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","description"],["name","description","cols","30","rows","5","formControlName","description",1,"description"],[1,"formButtons"],["type","submit",1,"submitButton"],["type","button",1,"cancelButton",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.save()}),t.TgZ(2,"div",2)(3,"label",3),t._uU(4,"Description"),t.qZA(),t._UZ(5,"textarea",4),t.qZA(),t.TgZ(6,"div",5)(7,"button",6),t._uU(8,"Update"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return n.closeDialog()}),t._uU(10,"Cancel"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.myForm))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".container[_ngcontent-%COMP%]{width:40vw}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}.formButtons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1em;margin:0}.formButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:7px 20px;margin:0;border:none;border-radius:5px;color:#fff}.description[_ngcontent-%COMP%]{width:100%}.formButtons[_ngcontent-%COMP%]   .submitButton[_ngcontent-%COMP%]{background-color:green}.formButtons[_ngcontent-%COMP%]   .cancelButton[_ngcontent-%COMP%]{background-color:red}@media only screen and (max-width:480px){.container[_ngcontent-%COMP%]{width:90vw}}"]}),o})();var T=c(6740),k=c(9453),U=c(1854),h=c(3608);function F(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"li")(1,"i",15),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw();return t.KtG(l.giveLike(i))}),t.qZA()()}}function A(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"li")(1,"i",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw();return t.KtG(l.removeLike(i))}),t.qZA()()}}function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"ul")(5,"li",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.openLikesDialog(l))}),t._uU(6),t.qZA(),t.YNc(7,F,2,0,"li",10),t.YNc(8,A,2,0,"ng-template",null,11,t.W1O),t.TgZ(10,"li")(11,"i",12),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.openCommentDialog(l.id))}),t.qZA()(),t.TgZ(12,"li")(13,"i",13),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deletePost(l.id))}),t.qZA()(),t.TgZ(14,"li")(15,"i",14),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.openEditDialog(l))}),t.qZA()()()()()}if(2&o){const e=s.$implicit,n=t.MAs(9),i=t.oxw();t.xp6(2),t.Q6J("src",e.img,t.LSH),t.xp6(4),t.Oqu(e.likes.length),t.xp6(1),t.Q6J("ngIf",!i.isLikedPost(e.id))("ngIfElse",n)}}let B=(()=>{class o{constructor(e,n,i,l,a){this.postService=e,this.likeService=n,this.router=i,this.dialogService=l,this.followService=a,this.posts=[],this.likedPosts=[],this.visibleComments=!1,this.follows=[],this.followedUsers={}}ngOnInit(){this.likeService.getLikes().subscribe({next:e=>this.likedPosts=e,error:e=>this.router.navigate(["/error"])})}openDialog(){this.dialogService.open(O,{header:"Upload Post",baseZIndex:99999999999})}openCommentDialog(e){this.dialogService.open(Z.J,{header:"Comments",data:{id:e},baseZIndex:99999999999,modal:!0})}openLikesDialog(e){this.likesDialogRef=this.dialogService.open(T.E,{header:"Likes",data:{post:e,followedUsers:this.followedUsers}})}openEditDialog(e){this.ref=this.dialogService.open(w,{header:"Edit Post",data:{post:e},baseZIndex:99999999999})}getFollows(){this.followsSubscription&&this.followsSubscription.unsubscribe(),this.followsSubscription=this.followService.getFollowed().subscribe({next:e=>{this.follows=e,this.followedUsers={},this.follows.forEach(n=>{this.followedUsers[n.followed]=!0})}})}deletePost(e){d().fire({title:"Delete post",icon:"warning",text:"Are you sure to delete this post?",showCloseButton:!0,showConfirmButton:!0,confirmButtonText:"Delete",confirmButtonColor:"red"}).then(n=>{n.isConfirmed&&this.postService.deletePost(e).subscribe({next:()=>{d().fire({title:"Successfully",text:"The post has been deleted successfully",showCancelButton:!1,showConfirmButton:!0,confirmButtonText:"Cancel",confirmButtonColor:"gray"}).then(i=>{i.isConfirmed&&this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/myposts"])})})}})})}isLikedPost(e){let n=!1;return 0!=this.likedPosts.length&&this.likedPosts.find(i=>{i.post.id==e&&(n=!0)}),n}giveLike(e){this.likeService.giveLike({post:{id:e.id},user:""}).subscribe({next:i=>{this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/myposts"])})},error:i=>console.log(i)})}removeLike(e){this.likeService.removeLike(e.id).subscribe({next:n=>{this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/myposts"])})}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.L),t.Y36(k.n),t.Y36(m.F0),t.Y36(p.xA),t.Y36(U.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-gallery"]],inputs:{posts:"posts"},decls:6,vars:1,consts:[[1,"row"],[1,"column"],[1,"add_post"],[1,"blur_background"],["data-toggle","tooltip","data-placement","bottom","title","Add Post",1,"bi","bi-plus-square",3,"click"],["class","column",4,"ngFor","ngForOf"],[1,"gallery-container"],[3,"src"],[1,"post_icons"],["pTooltip","View likes",1,"likesCount",3,"click"],[4,"ngIf","ngIfElse"],["liked",""],[1,"bi","bi-chat",3,"click"],[1,"bi","bi-trash3-fill","text-danger",3,"click"],[1,"bi","bi-pencil",3,"click"],[1,"bi","bi-heart",3,"click"],[1,"bi","bi-heart-fill",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"i",4),t.NdJ("click",function(){return n.openDialog()}),t.qZA()()(),t.YNc(5,S,16,4,"div",5),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.posts))},dependencies:[g.sg,g.O5,h.u],styles:[".row[_ngcontent-%COMP%]{display:flex;margin:5px;flex-wrap:wrap}.column[_ngcontent-%COMP%]{flex-basis:33.3%;padding:5px;margin-bottom:30px;max-width:26.301875em;min-height:19em;max-height:19em}.add_post[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.blur_background[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#bbb;filter:blur(5px);z-index:-1}.bi-plus-square[_ngcontent-%COMP%]{z-index:111;font-size:2.2em;cursor:pointer}.gallery-container[_ngcontent-%COMP%]{height:100%}img[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;z-index:9;object-fit:fill;border-radius:4px;background-color:#fff}.post_icons[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;list-style:none;margin:5px 0 0;padding:0;gap:1em}.post_icons[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;font-size:20px}.likesCount[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;color:#00f}.bi-heart-fill[_ngcontent-%COMP%]{color:red}.containerComment[_ngcontent-%COMP%]{border:solid 1px;border-radius:3px;display:flex;flex-direction:column;padding:5px;margin-bottom:5px}.comment[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-weight:bolder}.formTextArea[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:5em}.commentTextArea[_ngcontent-%COMP%]{width:100%;height:100%;margin-right:2%}.sendButton[_ngcontent-%COMP%]{background-color:#4473ff;padding:5px 15px;color:#fff;border:none;border-radius:3px}.uploadDateComment[_ngcontent-%COMP%]{font-size:.8em}@media only screen and (max-width:542px){.column[_ngcontent-%COMP%]{flex-basis:100%;max-height:16em}}@media only screen and (min-width: 542px) and (max-width:850px){.column[_ngcontent-%COMP%]{flex-basis:50%}}"]}),o})();const J=[{path:"",component:(()=>{class o{constructor(e){this.postService=e,this.myPosts=[]}ngOnInit(){this.postService.getMyposts().subscribe({next:e=>this.myPosts=e,error:e=>console.log(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mypost"]],decls:8,vars:1,consts:[[1,"mycontainer"],[1,"d-flex","justify-content-center"],[1,"postcontainer"],[3,"posts"],[1,"footer-container"],[1,"footer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"My Posts"),t.qZA()(),t.TgZ(4,"div",2),t._UZ(5,"app-post-gallery",3),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-footer",5),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("posts",n.myPosts))},dependencies:[_.c,B],styles:[".mycontainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}h3[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:5px;font-size:1.8em}.postcontainer[_ngcontent-%COMP%]{flex:1;width:100%}.footer-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.footer[_ngcontent-%COMP%]{width:70%}@media only screen and (max-width:480px){.mycontainer[_ngcontent-%COMP%]{align-items:center}.footer[_ngcontent-%COMP%]{width:100%}}"]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(J),m.Bz]}),o})();var Y=c(2523),q=c(1493);let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p.xA],imports:[g.ez,D,Y.m,r.UX,p.DL,q.S,h.z]}),o})()}}]);