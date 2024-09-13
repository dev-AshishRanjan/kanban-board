import React from 'react';
import './card.css'
import UserIcon from '../UserIcon/index.tsx';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../lib/helper.tsx';
import { getPriotityLabel } from '../../lib/index.ts';

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }: { ticket: Ticket, userData: User, hideStatusIcon: boolean, hideProfileIcon: boolean, hidePriorityIcon?: boolean }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {hidePriorityIcon ? null : <div className='more-icon-container'>
          {getPriorityIcon(getPriotityLabel(ticket.priority >= 4 ? 5 : ticket?.priority))}
        </div>}
        {ticket.tag.map((t: string) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
