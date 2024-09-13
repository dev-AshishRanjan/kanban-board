import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import "./helper.css";


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src="/icons/icons_FEtask/No-priority.svg" alt="" className='size-14' />
        case "Low": return <img src="/icons/icons_FEtask/Img - Low Priority.svg" alt="" className='size-14' />
        case "Medium": return <img src="/icons/icons_FEtask/Img - Medium Priority.svg" alt="" className='size-14' />
        case "High": return <img src="/icons/icons_FEtask/Img - High Priority.svg" alt="" className='size-14' />
        case "Urgent": return <img src="/icons/icons_FEtask/SVG - Urgent Priority colour.svg" alt="" className='size-14' />
        default: return <img src="/icons/icons_FEtask/SVG - Urgent Priority grey.svg" alt="" className='size-14' />
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <img src="/icons/icons_FEtask/Backlog.svg" alt="" className='size-14' />
        case "Todo": return <img src="/icons/icons_FEtask/To-do.svg" alt="" className='size-14' />
        case "In progress": return <img src="/icons/icons_FEtask/in-progress.svg" alt="" className='size-14' />
        case "Done": return <img src="/icons/icons_FEtask/Done.svg" alt="" className='size-14' />
        case "Canceled": return <img src="/icons/icons_FEtask/Cancelled.svg" alt="" className='size-14' />
        default: return <img src="/icons/icons_FEtask/down.svg" alt="" className='size-14' />
    }
}