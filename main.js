function showGrade(){
    let mark = document.getElementById('mark').value;
    let result = document.getElementById('result');

    if(mark >=101){
        result.innerHTML = 'Invalid marks';
    }
    else if(mark >= 80){
        result.innerHTML = 'Your grade is A+';
    }
    else if(mark >= 75){
        result.innerHTML = 'Your grade is A';
    }
    else if(mark >= 70){
        result.innerHTML = 'Your grade is A-';
    }
    else if(mark >= 65){
        result.innerHTML = 'Your grade is B+';
    }
    else if(mark >= 60){
        result.innerHTML = 'Your grade is B';
    }
    else if(mark >= 55){
        result.innerHTML = 'Your grade is B-';
    }
    else if(mark >= 50){
        result.innerHTML = 'Your grade is C+';
    }
    else if(mark >= 45){
        result.innerHTML = 'Your grade is C';
    }
    else if(mark >= 40){
        result.innerHTML = 'Your grade is C-';
    }
    else if(mark >= 33){
        result.innerHTML = 'Your grade is D';
    }
    else{
        result.innerHTML = 'Your grade is F';
    }
}