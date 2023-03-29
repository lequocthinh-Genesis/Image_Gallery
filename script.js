let menu = document.querySelector('#side-menu');
let sideBar = document.querySelector('.side-bar');


// Click vào logo menu để hiện side bar
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    sideBar.classList.toggle('active');
};

// khi croll thì side bar sẽ biến mất và đổi icon times (X) thành icoon menu
window.onscroll = () => {
    menu.classList.remove('fa-times');
    sideBar.classList.remove('active');
};

let popup = document.querySelector('.popup-image');

// Khi click sẽ ẩn hình ảnh lớn
popup.onclick = () => {
    popup.style.display = 'none';
};

let images = document.querySelectorAll('.image-container img');

// Lặp qua tất cả thẻ img trong class image-container
images.forEach( img => {
    // thẻ img nào được click thì kích hoạt hàm
    img.onclick = () => {
        // Lấy ra thuộc tính src của thẻ img được click
        var imgSrc = img.getAttribute('src');
        // Hiển thị ảnh lớn và thêm src vào
        // có nghĩa là ảnh nào được click sẽ hiển thị ảnh đó
        popup.style.display = 'flex';
        popup.querySelector('img').src = imgSrc;
    }
});


document.querySelector('#search-box').oninput = () => {
    var value = document.querySelector('#search-box').value.toLowerCase();
    images.forEach( img => {
        var dataSearch = img.getAttribute('data-search');
        if(dataSearch.indexOf(value) > -1) {
            img.style.display = 'inline-block';
        }
        else {
            img.style.display = 'none';
        };
    });
};

let categoryBtn = document.querySelectorAll('.category .btn');

categoryBtn.forEach(btn => {
    btn.onclick = () => {
        categoryBtn.forEach(remove => remove.classList.remove('active'));
        dataCategory = btn.getAttribute('data-category');
        images.forEach(img => {
            var dataCat = img.getAttribute('data-cat');
            if(dataCategory == 'all') {
                img.style.display = 'inline-block';
            }
            else if(dataCategory == dataCat) {
                img.style.display = 'inline-block';

            }
            else {
                img.style.display = 'none';

            };
        });
        btn.classList.add('active');
    };
});

let typeBtn = document.querySelectorAll('.type .btn');

typeBtn.forEach(btn => {
    btn.onclick = () => {
        typeBtn.forEach(remove => remove.classList.remove('active'));
        dataType = btn.getAttribute('data-type');
        images.forEach(img => {
            var imgType = img.getAttribute('src').split('.').pop();
            if(dataType == 'all') {
                img.style.display = 'inline-block';
            }
            else if(dataType == imgType) {
                img.style.display = 'inline-block';

            }
            else {
                img.style.display = 'none';

            };
        });
        btn.classList.add('active');
    };
});

