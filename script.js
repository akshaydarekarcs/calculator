(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            let operation = e.target.dataset.op;
            
            if (value !== undefined) {
                screen.value += value;
            } else if (operation) {
                screen.value += ' ' + operation + ' ';
            }
        });
    });

   
    clear.addEventListener('click', function() {
        screen.value = '';
    });

  
    equal.addEventListener('click', function() {
        try {
            let result = eval(screen.value);
            if (!isNaN(result) && isFinite(result)) {
                screen.value = parseFloat(result.toFixed(4));
            } else {
                screen.value = 'Error';
            }
        } catch (error) {
            screen.value = 'Error';
        }
    });

})();