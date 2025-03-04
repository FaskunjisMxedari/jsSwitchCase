console.log(returnTheAge());

function confirmation(){
	let continueStudying = confirm("are you continuing studying?")
      	switch(continueStudying) {
          case true:
            return "you are studying";
          default:
            return "You are not studying";
        }
}

function returnTheAge(){
  let age = prompt('შენი ასაკი');
  	switch(true) {
    	case (age<=0):
      		return confirmation();
        break;
  		case (0<age && age<=6):
  			return "you are in kindergarten";
    
     	case (6<age && age<=18):
            return "You are in the school";
    
        case (18<age && age<=22):
        	return "You are in the university";
    
     	default :
      		return confirmation();
        break;
  }
    	
}