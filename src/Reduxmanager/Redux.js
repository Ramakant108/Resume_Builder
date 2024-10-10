import { createSlice } from "@reduxjs/toolkit";



const resumeslice=createSlice({
    name:"ResumeState",
    initialState:{
        Personalinfo:{
            first_name:"",
            last_name:"",
            email:"",
            phoneNumber:"",
            address:"",
            city:"",
            state:"",
            postle_code:"",
            objective:""
        },

        Education:[{
            type:"Post Graduation",
            university:"",
            degree:"",
            start_year:"",
            end_year:""
        }],

        Workexp:[
           {
            job_title:"",
            orgnization_name:"",
            start_year:"",
            end_year:"",
            jobDescription:""
           }
        ],
        Skills:[{skill:""}]
        ,
        imageURL:'',
        selectedTemplete:""
    },
    reducers:{
        updatepersonalinfo:(state,action)=>{
            state.Personalinfo[action.payload.key]=action.payload.value;
         },
        updateEducation:(state,action)=>{
            state.Education[action.payload.index][action.payload.key]=action.payload.value;
         },
        updateWorkexp:(state,action)=>{
            state.Workexp[action.payload.index][action.payload.key]=action.payload.value;
         },
        updateSkils:(state,action)=>{
            state.Skills[action.payload.index][action.payload.key]=action.payload.value;
         },
        addElement:(state,action)=>{
            state[action.payload.key].push(action.payload.element);
        },
        removeElement:(state,action)=>{
            state[action.payload.key].pop();
        },
        updateElement:(state,action)=>{
            state[action.payload.key]=action.payload.value;
        }
    }
})

export const {addElement,removeElement,updateEducation,updateElement,updateSkils,updateWorkexp,updatepersonalinfo}=resumeslice.actions

export default resumeslice.reducer


 