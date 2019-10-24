let actions = document.querySelector('#actions');

class Tamagochi {

  constructor(name, health, happines, hungry, thirsty) {
    this.name = name;
    this.health = health;
    this.happiness = happines;
    this.hungry = hungry;
    this.thirsty = thirsty;
  }
  walk() {
    if(this.hungry > -50) {
      if(this.happiness >= 200) {
        console.log(this.name + ' is walking(happiness max, hungry - 10, thirsty - 5)');
        actionsText.innerHTML = this.name + ' is walking(happiness max, hungry - 10, thirsty - 5)';
        actions.appendChild(actionsText);
        this.hungry -= 10;
        this.thirsty -= 5;
      } else {
        console.log(this.name + ' is walking(happiness + 20, hungry - 10, thirsty - 5)');
        this.happiness += 20;
        this.hungry -= 10;
        this.thirsty -= 5;
      }
    } else {
      if(this.happiness >= 200) {
        console.log(this.name + ' is walking(happiness max, hungry - 10, thirsty - 5, health - 10)');
        this.hungry -= 10;
        this.health -= 10;
        this.thirsty -= 5;
      } else {
        console.log(this.name + ' is walking(happiness + 20, hungry - 10, thirsty - 5, health - 10)');
        this.happiness += 20;
        this.hungry -= 10;
        this.health -= 10;
        this.thirsty -= 5;
      }
    }
    console.log(myTamagochi);
  }

  eat() {
    if(this.hungry < 100) {
      if(this.happiness >= 200) {
        if(this.health >= 200) {
          console.log(this.name + ' is eating(happiness max, hungry + 20, thirsty - 5, health max)')
          this.hungry += 20;
          this.thirsty -= 5;
        } else {
          console.log(this.name + ' is eating(happiness max, hungry + 20, thirsty - 5, health + 5)')
          this.hungry += 20;
          this.thirsty -= 5;
          this.health += 5;
        }
      } else {
        if(this.health >= 200) {
          console.log(this.name + ' is eating(happiness + 10, hungry + 20, thirsty - 5, health max)')
          this.happiness += 10;
          this.hungry += 20;
          this.thirsty -= 5;
        } else {
          console.log(this.name + ' is eating(happiness + 10, hungry + 20, thirsty - 5, health + 5)')
          this.happiness += 10;
          this.hungry += 20;
          this.thirsty -= 5;
          this.health += 5;
        }
      }
    } else {
      console.log(this.name + ' is eating(happiness - 15, hungry + 20, thirsty - 10, health - 10)')
      this.happiness -= 15;
      this.hungry += 20;
      this.thirsty -= 10;
      this.health -= 10;
    }
    console.log(myTamagochi);
  }

  drink() {
    if(this.thirsty < 100) {
      if(this.happiness >= 200) {
        if(this.health >= 200) {
          console.log(this.name + ' is drinking(happiness max, hungry - 5, thirsty + 10, health max)');
          this.hungry -= 5;
          this.thirsty += 10;
        } else {
          console.log(this.name + ' is drinking(happiness max, hungry - 5, thirsty + 10, health + 5)');
          this.hungry -= 5;
          this.thirsty += 10;
          this.health += 5;
        }
      } else {
        if(this.health >= 200) {
          console.log(this.name + ' is drinking(happiness + 10, hungry - 5, thirsty + 10, health max)');
          this.happiness += 10;
          this.hungry -= 5;
          this.thirsty += 10;
        } else {
          console.log(this.name + ' is drinking(happiness + 10, hungry - 5, thirsty + 10, health + 5)');
          this.happiness += 10;
          this.hungry -= 5;
          this.thirsty += 10;
          this.health += 5;
        }
      }
    } else {
      console.log(this.name + ' is drinking(happiness - 10, hungry - 5, thirsty + 10, health - 5)');
      this.happiness -= 10;
      this.hungry -= 5;
      this.thirsty += 10;
      this.health -= 5;
    }
    console.log(myTamagochi);
  }

  play() {
    if(this.happiness >= 200) {
      console.log(this.name + ' is playing(happiness max, hungry - 10, thirsty - 10)')
      this.hungry -= 10;
      this.thirsty -= 10;
    } else {
      console.log(this.name + ' is playing(happiness + 20, hungry - 10, thirsty - 10)')
      this.happiness += 20;
      this.hungry -= 10;
      this.thirsty -= 10;
    }
    console.log(myTamagochi);
  }

  sleep() {
    if(this.happiness >= 200) {
      if(this.health >= 200) {
        console.log(this.name + 'is sleeping(happiness max, hungry -50, thirsty - 50, health max)')
        this.hungry -= 50;
        this.thirsty -= 50;
      } else {
        console.log(this.name + 'is sleeping(happiness max, hungry -50, thirsty - 50, health + 50)')
        this.hungry -= 50;
        this.thirsty -= 50;
        this.health += 50;
      }
    } else {
      if(this.health >= 200) {
        console.log(this.name + 'is sleeping(happiness + 50, hungry -50, thirsty - 50, health max)')
        this.happiness += 50;
        this.hungry -= 50;
        this.thirsty -= 50;
      } else {
        console.log(this.name + 'is sleeping(happiness + 50, hungry -50, thirsty - 50, health + 50)')
        this.happiness += 50;
        this.hungry -= 50;
        this.thirsty -= 50;
        this.health += 50;
      }
    }
    console.log(myTamagochi);
  }

}

let tamagochiNamePrompt = prompt('Tamagochi\'s name:');

let myTamagochi = new Tamagochi(tamagochiNamePrompt, 100, 20, 0, 0);

alert('Hi! My name is ' + tamagochiNamePrompt + ' and I\'m your tamagochi');
console.log(myTamagochi);

function walking() {
  let actionsText = document.createElement('p');
  actionsText.className = 'actions-p';

  myTamagochi.walk();

  if(myTamagochi.hungry <= -200 || myTamagochi.health <= -100 || myTamagochi.thirsty <= -150) {
    alert('Oh no!!!' + tamagochiNamePrompt + ' died((( Page will reload');
    location.reload();
  }

  if(myTamagochi.hungry > -50) {
    if(myTamagochi.happiness >= 200) {
      actionsText.innerHTML = myTamagochi.name + ' is walking(happiness max, hungry - 10, thirsty - 5)';
      actions.appendChild(actionsText);
    } else {
      actionsText.innerHTML = myTamagochi.name + ' is walking(happiness + 20, hungry - 10, thirsty - 5)';
      actions.appendChild(actionsText);
    }
  } else {
    if(myTamagochi.happiness >= 200) {
      actionsText.innerHTML = myTamagochi.name + ' is walking(happiness max, hungry - 10, thirsty - 5, health - 10)';
      actions.appendChild(actionsText);
    } else {
      actionsText.innerHTML = myTamagochi.name + ' is walking(happiness + 20, hungry - 10, thirsty - 5, health - 10)';
      actions.appendChild(actionsText);
    }
  }
}

function eating() {
  let actionsText = document.createElement('p');
  actionsText.className = 'actions-p2';

  myTamagochi.eat();

  if(myTamagochi.hungry >= 200 || myTamagochi.health <= -100 || myTamagochi.thirsty <= -150) {
    alert('Oh no! ' + tamagochiNamePrompt + ' died! Page will reload...');
    location.reload();
  }else if(myTamagochi.happiness < -100) {
    alert('Oh no! ' + tamagochiNamePrompt + ' ran away! Page will reload...');
    location.reload();
  }

  if(myTamagochi.hungry < 100) {
    if(myTamagochi.happiness >= 200) {
      if(myTamagochi.health >= 200) {
        actionsText.innerHTML = myTamagochi.name + ' is eating(happiness max, hungry + 20, thirsty - 5, health max)';
        actions.appendChild(actionsText);
      } else {
        actionsText.innerHTML = myTamagochi.name + ' is eating(happiness max, hungry + 20, thirsty - 5, health + 5)';
        actions.appendChild(actionsText);
      }
    } else {
      if(myTamagochi.health >= 200) {
        actionsText.innerHTML = myTamagochi.name + ' is eating(happiness + 10, hungry + 20, thirsty - 5, health max)';
        actions.appendChild(actionsText);
      } else {
        actionsText.innerHTML = myTamagochi.name + ' is eating(happiness + 10, hungry + 20, thirsty - 5, health + 5)';
        actions.appendChild(actionsText);
      }
    }
  } else {
    actionsText.innerHTML = myTamagochi.name + ' is eating(happiness - 15, hungry + 20, thirsty - 10, health - 10)';
    actions.appendChild(actionsText);
  }
}

function drinking() {
  let actionsText = document.createElement('p');
  actionsText.className = 'actions-p3';

  myTamagochi.drink();

  if(myTamagochi.hungry <= -200 || myTamagochi.health <= -100 || myTamagochi.thirsty >= 200) {
    alert('Oh no! ' + tamagochiNamePrompt + ' died! Page will reload...');
    location.reload();
  }else if(myTamagochi.happiness < -100) {
    alert('Oh no! ' + tamagochiNamePrompt + ' ran away! Page will reload...');
    location.reload();
  }

  if(myTamagochi.thirsty < 100) {
    if(myTamagochi.happiness >= 200) {
      if(myTamagochi.health >= 200) {
        actionsText.innerHTML = myTamagochi.name + ' is drinking(happiness max, hungry - 5, thirsty + 10, health max)';
        actions.appendChild(actionsText);
      } else {
        actionsText.innerHTML = myTamagochi.name + ' is drinking(happiness max, hungry - 5, thirsty + 10, health + 5)';
        actions.appendChild(actionsText);
      }
    } else {
      if(myTamagochi.health >= 200) {
        actionsText.innerHTML = myTamagochi.name + ' is drinking(happiness + 10, hungry - 5, thirsty + 10, health max)';
        actions.appendChild(actionsText);
      } else {
        actionsText.innerHTML = myTamagochi.name + ' is drinking(happiness + 10, hungry - 5, thirsty + 10, health + 5)';
        actions.appendChild(actionsText);
      }
    }
  } else {
    actionsText.innerHTML = myTamagochi.name + ' is drinking(happiness - 10, hungry - 5, thirsty + 10, health - 5)';
    actions.appendChild(actionsText);
  }
}

function playing() {
  let actionsText = document.createElement('p');
  actionsText.className = 'actions-p4';

  myTamagochi.play();

  if(myTamagochi.hungry <= -200 || myTamagochi.thirsty <= -150) {
    alert('Oh no! ' + tamagochiNamePrompt + ' died! Page will reload...');
    location.reload();
  }

  if(myTamagochi.happiness >= 200) {
    actionsText.innerHTML = myTamagochi.name + ' is playing(happiness max, hungry - 10, thirsty - 10)';
    actions.appendChild(actionsText);
  } else {
    actionsText.innerHTML = myTamagochi.name + ' is playing(happiness + 20, hungry - 10, thirsty - 10)';
    actions.appendChild(actionsText);
  }
}

function sleeping() {
  let actionsText = document.createElement('p');
  actionsText.className = 'actions-p5';

  myTamagochi.sleep();

  if(myTamagochi.hungry <= -200 || myTamagochi.thirsty <= -150) {
    alert('Oh no! ' + tamagochiNamePrompt + ' died! Page will reload...');
    location.reload();
  }

  if(myTamagochi.happiness >= 200) {
    if(myTamagochi.health >= 200) {
      actionsText.innerHTML = myTamagochi.name + ' is sleeping(happiness max, hungry -50, thirsty - 50, health max)';
      actions.appendChild(actionsText);
    } else {
      actionsText.innerHTML = myTamagochi.name + ' is sleeping(happiness max, hungry -50, thirsty - 50, health + 50)';
      actions.appendChild(actionsText);
    }
  } else {
    if(myTamagochi.health >= 200) {
      actionsText.innerHTML = myTamagochi.name + ' is sleeping(happiness + 50, hungry -50, thirsty - 50, health max)';
      actions.appendChild(actionsText);
    } else {
      actionsText.innerHTML = myTamagochi.name + ' is sleeping(happiness + 50, hungry -50, thirsty - 50, health + 50)';
      actions.appendChild(actionsText);
    }
  }
}