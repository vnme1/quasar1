import { defineStore } from "pinia";
import { uid } from "quasar";
import { LocalStorage } from 'quasar'

export default defineStore("useTodo", {
  state:()=>({
    //전역적으로 사용할 변수 선언하기(배열로 만듬)
    tasks:[],
  }),
  getters : {

  },
  actions: {
    insertTodo(title){
      //데베에 넣기 return id
      if(this.tasks){
        this.tasks.unshift({
          id: uid(),
          title,
          done:'N'
        });
      }else{
        this.tasks=[];
        this.tasks.push({
          id: uid(),
          title,
          done:'N'
        })
      }
      LocalStorage.set("todo", this.tasks);
    },
    listTodo(){
      this.tasks = LocalStorage.getItem("todo");
      //값 가지고 와서 task에 담아주기
    },
    removeTodo(id){
      //this.tasks에서 id find해서 가져오기
      // 배열 안 오브젝트일때 idx
      const idx = this.tasks.findIndex(task=>task.id == id); //위치찾기
      //삭제 array.splice(시작index, 제거index, 추가요소)
      this.tasks.splice(idx,1);
      LocalStorage.set("todo", this.tasks);
    },
    editTodo(item){
      //배열에서 수정하되 done은 'n'으로
      const idx = this.tasks.findIndex(task=>task == item); //위치찾기
      //수정된값이 아이템으로 들어옴
      item.done = 'N'; //클릭이 되지않은 상태로 하기
      this.tasks.splice(idx,1,item);
      LocalStorage.set("todo", this.tasks); //다시 넣어주기 그럼 수정끝
    }
  }
})
