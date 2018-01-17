$(document).ready(function(event){

  var feelings = [];
  var symptoms = [];
  var coping = [];

  $("#stressQuiz").submit(function(event){
    event.preventDefault();

  $("input:checkbox[name=coping]:checked").each(function(){
    var copingChecked = $(this).val();
    coping.push(copingChecked);
    });

  $("input:checkbox[name=symptoms]:checked").each(function(){
    var symptomsChecked = $(this).val();
    symptoms.push(symptomsChecked);
    });

  $("input:checkbox[name=feeling]:checked").each(function(){
    var feelingChecked = $(this).val();
    feelings.push(feelingChecked);
    });

      if (feelings.length >= 1 &&  symptoms.length >=1 && coping.length<=1){
      alert("You okay, bro?")
    } else if (coping.length>=4){
      alert("Great job on coping!")
    } else ("Not bad.")
  });
});
//terrible at handling stress (needs resources)
//not handling stress well (recommendations)
//handling stress well
