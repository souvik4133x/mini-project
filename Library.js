const searchInput = document.getElementById('searchInput');
        const optionsList = document.getElementById('optionsList');
        const options = [...optionsList.getElementsByTagName('li')];

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            options.forEach(option => {
                const text = option.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            });
        });