/*document.addEventListener('DOMContentLoaded', function () {
    // 獲取 Modal 和相關元素
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-image');
    var closeBtn = document.getElementsByClassName('close')[0];
    var photosContainer = document.querySelector('.photos-container');
    var isDown = false;
    var startX;
    var scrollLeft;
    // 為所有可放大的圖片添加點擊事件
    var zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';  // 顯示 modal
            modalImg.src = this.src;  // 將圖片的 src 設置為 modal 內顯示的圖片
        });
    });

    // 點擊關閉按鈕關閉 modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';  // 隱藏 modal
    });

    // 點擊 modal 背景也可以關閉
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    //new
    var photosContainer = document.querySelector('.photos-container');
    var photos = document.querySelectorAll('.photos img');
    var currentIndex = 0;
    var isMouseInPhotosContainer = false;

    // 給每張圖片設置一個索引
    photos.forEach((img, index) => {
        img.setAttribute('data-index', index); // 為每張圖片設置 data-index 屬性
    });

    function updateCarousel() {
        photos.forEach((img, index) => {
            var relativeIndex = (index - currentIndex) % photos.length; // 計算相對索引
            
            img.style.order = relativeIndex; // 根據相對索引改變圖片順序
    
            // 默認縮小並設置透明度
            img.style.transform = 'scale(0.8)';
            img.style.opacity = '0.5';
    
            if (relativeIndex === 0) {  // 中間的圖片
                img.style.transform = 'scale(1.2)';
                img.style.opacity = '1';
            } else if (relativeIndex === 1 || relativeIndex === -1) {  // 左右兩側的圖片
                img.style.transform = 'scale(1)';
                img.style.opacity = '0.8';
            }
           
        });
    
        // 讓 .photos 容器居中對齊中間圖片
        const containerWidth = photosContainer.clientWidth;
        const photoWidth = photos[currentIndex].clientWidth;
        const offset = (containerWidth - photoWidth) / 2;
     for(var i=-2;i<=2;i++){
        var ci;
                if(currentIndex + i >=5  ){
                    ci = (currentIndex + i) - 5;
                }
                else if(currentIndex + i < 0){
                    ci = (currentIndex + i) + 5;
                }
                else{
                    ci = currentIndex + i;
                }
                photosContainer.style.transform = `translateX(${-photos[ci].offsetLeft + offset*i}px)`;
                }
        // 確保中間圖片居中顯示
        
    }
        
    
        
        
    });*/
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById('modal');
        var modalImg = document.getElementById('modal-image');
        var closeBtn = document.getElementsByClassName('close')[0];
        var photosContainer = document.querySelector('.photos-container');
        var photos = document.querySelectorAll('.photos img');
        var currentIndex = 0;
        // 獲取 Modal 和相關元素
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-image');
    var closeBtn = document.getElementsByClassName('close')[0];
    var photosContainer = document.querySelector('.photos-container');
    var isDown = false;
    var startX;
    var scrollLeft;
    // 為所有可放大的圖片添加點擊事件
    var zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';  // 顯示 modal
            modalImg.src = this.src;  // 將圖片的 src 設置為 modal 內顯示的圖片
        });
    });

    // 點擊關閉按鈕關閉 modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';  // 隱藏 modal
    });

    // 點擊 modal 背景也可以關閉
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
        // 給每張圖片設置一個索引
        photos.forEach((img, index) => {
            img.setAttribute('data-index', index);
        });
    
        function updateCarousel() {
            photos.forEach((img, index) => {
                // 計算相對於 currentIndex 的相對索引
                var relativeIndex = (index - currentIndex + photos.length) % photos.length;
        
                // 計算容器的寬度和選中圖片的偏移
                const containerWidth = photosContainer.clientWidth;
                const photoWidth = photos[currentIndex].clientWidth;
                const offset = (containerWidth - photoWidth) / 2;
        
                // 清空初始樣式
                img.style.transform = 'scale(0.8)';
                img.style.opacity = '0.5';
        
                // 設定當前圖片
                if (relativeIndex === 0) {
                    img.style.transform = 'scale(1.5)';
                    img.style.opacity = '1';
                } 
                // 設定當前圖片的前兩張（處理循環邏輯）
                else if (relativeIndex === 1 || relativeIndex === 2) {
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '0.8';
                }
                // 設定當前圖片的後兩張（處理循環邏輯）
                else if (relativeIndex === photos.length - 1 || relativeIndex === photos.length - 2) {
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '0.8';
                }
        
        
        
                // 更新圖片容器的位置，確保圖片居中顯示
                photosContainer.style.transform = `translateX(${-photos[currentIndex].offsetLeft + offset}px)`;
            });
        }
        
        
    
        // 監聽滾輪事件
        photosContainer.addEventListener('wheel', function (event) {
            event.preventDefault(); // 阻止默認滾動行為
            if (event.deltaY > 0) {
                // 向下滾動，向右移動圖片
                currentIndex = (currentIndex + 1) % photos.length;
            } else {
                // 向上滾動，向左移動圖片
                currentIndex = (currentIndex - 1 + photos.length) % photos.length;
            }
            updateCarousel();
        });
    
        // 初始更新
        updateCarousel();
    });
    
    
  

