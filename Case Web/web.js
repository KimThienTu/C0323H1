let products = [];

function addProduct(){
    let name = document.getElementById('product-name').value;
    let price = document.getElementById("product-price").value;
    let description = document.getElementById("product-description").value;
    if (!name || !price || !description){
        alert('Bạn chưa nhập đủ các thông tin cần thiết');
        return;
    }
    let product = {name, price, description};
    products.push(product);
    renderProducts();
    clearForm();
}
function renderProducts(){
    let productListElem = document.getElementById('product-list');
    productListElem.innerHTML = "";
    for (let i  = 0; i < products.length; i++){
        let product = products[i];
        let row = `<tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                        <td><input type="button" onclick="editProduct(${i})" value="Sửa"></input></td>
                        <td><input type="button" onclick="deleteProduct(${i})" value="Xóa"></input></td>
                  </tr>`
        productListElem.innerHTML += row;
    }
}

function editProduct(index){
    let product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-description').value = product.description;
    let addButton = document.getElementById('addBtn');
    addButton.value = "UPDATE";
    addButton.onclick = function (){
        saveProduct(index);
    }
}
function saveProduct(index){
    let name = document.getElementById('product-name').value;
    let price = document.getElementById('product-price').value;
    let description = document.getElementById('product-description').value;
    let product = {name, price, description};
    products[index] = product;
    renderProducts();
    clearForm();
    let addButton = document.getElementById("addBtn");
    addButton.value = 'Thêm sinh viên'
    addButton.onclick = addProduct;
}
function deleteProduct(index){
    products.splice(index, 1);
    renderProducts()
}

function creatDefaulProduct(name, price, description){
    let product = {name, price, description}
    products.push(product);
    renderProducts()
}
function intt(){
    creatDefaulProduct('Trần Quốc Dũng', '1990', 'Nga Sơn - Thanh Hóa')
    creatDefaulProduct('Nguyễn Hữu Sỹ', '1996', 'Tây Tựu - Hà Nội')
    creatDefaulProduct('Đào Ngọc Long', '1999', 'Hưng Hà - Thái Bình')
    creatDefaulProduct('Đinh Văn Sơn', '1998', 'Quất Lâm - Nam Định')
    creatDefaulProduct('Hoàng Chí Thành', '2001', 'Hà Đông - Hà Nội')
    creatDefaulProduct('Đỗ Hoàng Quân', '1999', 'TP - Thái Nguyên')
}
intt()

function clearForm(){
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
}

function logout(){
    window.location.href = 'dangnhap.html';
}
