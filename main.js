const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-kick1');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

     renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
     renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },
     changeHP: function(count){
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
           
        }else {
            this.damageHP -= count;
        }
     
    
        this.renderHP();
    }
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
     renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },
     changeHP: function(count){
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            
        }else {
            this.damageHP -= count;
        }
     
    
        this.renderHP();
    }
}

$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});
$btn1.addEventListener('click', function() {
    console.log('button fight 2');
    
    character.changeHP(random(100));
    enemy.changeHP(random(100));
  
});

function init(){
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
  
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();
