      const music = document.getElementById("background-music");
        
        // Tự động phát nhạc khi người dùng tương tác lần đầu
        document.addEventListener('click', function() {
            if (music.paused) {
                 music.play().catch(error => {
                    console.log("Tự động phát nhạc bị chặn:", error);
                 });
            }
        }, { once: true });


        // JAVASCRIPT CHO HIỆU ỨNG MƯA RƠI CHÉO LIÊN TỤC
        const rainContainer = document.getElementById('rain-container');
        const totalDrops = 300; 
        const screenWidth = window.innerWidth;

        for (let i = 0; i < totalDrops; i++) {
            const drop = document.createElement('div');
            drop.classList.add('raindrop');
            
            drop.style.left = `${Math.random() * screenWidth}px`;
            
            // Tăng tốc độ và giảm độ trễ để mưa trông liên tục
            const duration = Math.random() * 0.7 + 0.5; 
            const delay = Math.random() * 1.5; 
            
            drop.style.animationDuration = `${duration}s`;
            drop.style.animationDelay = `${delay}s`;
            drop.style.animationIterationCount = 'infinite';
            
            drop.style.height = `${Math.random() * 20 + 25}px`; 
            
            rainContainer.appendChild(drop);
        }

