export function setTimeMedicQuote(hourStart:number,minuteStart,hourMax:number,
                           minuteMax:number,
                           color:string,
                           text:string,
                           eventosDay:any,
                           asignacionList:any) {

  let timeOptions:any[]=[];

  for (let hour = hourStart; hour < hourMax; hour++) {
    for (let minute = minuteStart; minute < 60; minute += 15) {

      if(asignacionList.length>0){

        for (const asignacionConsultorio of asignacionList) {

          let startTimeRoom=asignacionConsultorio.startTime;
          let endTimeRoom=asignacionConsultorio.endTime;

          if(((hour*60)+minute)>=startTimeRoom && ((hour*60)+minute)<=endTimeRoom){
            text="Consultorio:"+" "+asignacionConsultorio.idRoom.roomNumber+" "+
              "Unidad de Negocio:"+asignacionConsultorio.idRoom.idBusinessUnit.description
              " Región:"+asignacionConsultorio.idRoom.idBusinessUnit.region.description;
            color="#56fc42"
          }

        }


      }

      if(eventosDay.length>0){

        for (let eventoDay of eventosDay) {


          let numberTimeMeet=(eventoDay.endTime-eventoDay.startTime)/15;

          if(Math.trunc(eventoDay.startTime/60)==hour){

            if(eventoDay.startTime%60==minute){


              if(numberTimeMeet>0){
                if(eventoDay.quoteType=="CONSULTA MÉDICA"){
                  text=eventoDay.quoteType;
                  color="#fda100";
                  if(eventoDay.cancelDescription!=""){
                    text=text+" "+"CANCELADA";
                    color="#56fc42"
                  }

                }
                if(eventoDay.quoteType=="REUNIÓN"){
                  color="#fda100";
                  text=eventoDay.quoteType;
                }

                if(eventoDay.quoteType=="VACACIÓN"){
                  color="#fda100";
                  text=eventoDay.quoteType;
                }

                numberTimeMeet=numberTimeMeet-1;
              }



            }
          }

        }

      }


      timeOptions.push({ hour, minute ,color,text});

      color="";
      text="";

    }
  }

  return timeOptions;
}

export function findTimeIndex(hour: number, minute: number,timeOptions:any): number {

  for (let i = 0; i <timeOptions.length; i++) {
    const time = timeOptions[i];
    if (time.hour === hour && time.minute === minute) {
      return i; // Found the matching index
    }
  }

  return -1; // Not found
}


export function convertToHoursAndMinutes(minutes): { hour: number; minute: number } {

  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;

  return {
    hour: hours,
    minute: remainingMinutes
  };
}
