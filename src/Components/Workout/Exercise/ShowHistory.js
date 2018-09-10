import React  from 'react';
import {Button} from 'antd-mobile';
import VideoDetail from './VideoDetail.js';

const ShowHistory = (props) => {

    console.log("This is show history page", props);

    let temp = props.record.weekly_record.map(x=>x.daily_record.map(i=>i.data.map(v=>v.reps)))
    let temp2 = props.record.weekly_record

    let temp3 = temp2.map(function(x){
       let week = x.week
       let ar1 = x.daily_record
       let ar2 = ar1.map(function(i){
                           let day = i.dayIndex
                           let ar3 = i.data
                           let ar4 = ar3.map(function(v){
                             let code= v.code
                             let ar5 = v.data
                             let ar6 = ar5.map(function(a){
                               let sets = a.sets
                               let reps = a.reps
                               let weight = a.weight
                                return(console.log(weight, reps))
                             })
                           })
                        })
  })
  console.log(temp3)
  return (
    <div>
      This is for short history
      {props.record.weekly_record.map((data,key) => (
           <div key={key}>
           <span>Week{data.week}:</span>
           {
            data.daily_record.map((data1, key1) => (
              <span key1={key1}>day{data1.day}</span>
              // {
              //   data1.data.map((data2,key2)=>(
              //     <span key2={key2}>{data2.code}</span>
              //   ))
              // }

            ))
           }

          </div>
      ))
      }
      <div>
        <form>
          weight(kg):
        {/*temp2.map(function(x){
           let week = x.week
           let ar1 = x.daily_record

           let ar2 = ar1.map(function(i){
                               let day = i.dayIndex
                               let ar3 = i.data
                               let ar4 = ar3.map(function(v){
                                 let code= v.code
                                 let ar5 = v.data
                                 let ar6 = ar5.map(function(a){
                                   let sets = a.sets
                                   let reps = a.reps
                                   let weight = a.weight
                                    return(console.log(weight, reps))
                                 })

                               })

        })})*/}

      </form>
      </div>






       <Button style={{margin: '0px 5vw 5vw'}}onClick={(e) => props.onBackButtonClicked(e) }>
            Return
      </Button>
    </div>
  )
}

export default ShowHistory;
