import { PencilLine } from "lucide-react";
import style from './Header.module.css'

export function Header(){
    return(
        <header className={style.header}>
          <h1 className={style.title}>To Study</h1>
          <div className={style.marginLine}></div>
          <div className={style.inputWrapper}>
            <input className={style.input} type="text" placeholder='Adicione uma nova tarefa....' />
            <button className={style.addButton}>
              <PencilLine/>
            </button>
          </div>
        </header>
    )
}