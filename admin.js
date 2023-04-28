let catMenu = [
{
  id:1,
  img:"./anh/ald-600x600.jpg",
  name:"Mèo Anh lông dài DD011",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:2,
  img:"./anh/aldmatxanh-600x600.jpg",
  name:"Mèo Anh Lông Dài Mắt Xanh",
  age:"3 tháng",
  Weighed:"3 kg",
  sex:"Đực",
  price:"2,700,000",
},
{
  id:3,
  img:"./anh/aldxam-1-600x600.jpg",
  name:"Mèo Anh Lông Dài Xám Xanh DD012",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:4,
  img:"./anh/aldxam-600x600.jpg",
  name:"Mèo Anh Lông Dài Xám DD009",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:5,
  img:"./anh/v-600x600.jpg",
  name:"Mèo Anh Lông Dài Màu Vàng DD016",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:6,
  img:"./anh/siver-600x600.jpg",
  name:"Mèo Anh Lông Ngắn Silver",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:7,
  img:"./anh/meo-golden-600x600.jpg",
  name:"Mèo GOLDEL DD002",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:8,
  img:"./anh/godel-600x600.jpg",
  name:"Mèo GOLDEL DD001",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:9,
  img:"./anh/z4220581829298_8038fc4804ebf7e075fa756891131c43-768x768.jpg",
  name:"Mèo GOLDEL DD007",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:10,
  img:"./anh/chanlunbi-600x600.jpg",
  name:"Mèo Chân Ngắn Bicolor",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:11,
  img:"./anh/chan-lun-600x600.jpg",
  name:"Mèo Chân Ngắn DD006",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:12,
  img:"./anh/lun-600x600.jpg",
  name:"Mèo Chân Ngắn DD010",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:13,
  img:"./anh/z4220570262685_7a37db84de05c27150138615c358a41e-768x768.jpg",
  name:"Mèo Munchkin",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
{
  id:14,
  img:"./anh/lun-1-600x600.jpg",
  name:"Mèo Munchkin Màu Cream",
  age:"3 tháng",
  Weighed:"2.5 kg",
  sex:"Đực",
  price:"2,500,000",
},
];
let tbody = document.getElementById("tbody");
let form = document.getElementById("main-form");

function renderCatmenu(){
  tbody.innerHTML = "";
  for (let i = 0; i < catMenu.length; i++) {
    tbody.innerHTML = tbody.innerHTML + 
    `<tr id="${catMenu[i].id}">
        <th scope="row">${i + 1}</th>
        <td class="td-img">${catMenu[i].img}</td>
        <td>${catMenu[i].name}</td>
        <td>${catMenu[i].age}</td>
        <td>${catMenu[i].Weighed}</td>
        <td>${catMenu[i].sex}</td>
        <td>${catMenu[i].price}</td>
        <td>
            <button type="button" class="btn btn-primary">Sửa</button>
            <button type="button" class="btn btn-danger">Xóa</button>
        </td>
    </tr>`
    
  }
}
renderCatmenu();
form.onsubmit = function(e){
  e.preventDefault();
  let newCatMenu = {
    id: Math.floor(Math.random() * 1000000000),
    img:form.img.value,
    name:form.name.value,
    age:form.age.value,
    Weighed:form.Weighed.value,
    sex:form.sex.value,
   price:form.price.value,
  };
  catMenu.push(newCatMenu);
  renderCatmenu();
};
