import FriendListItem from '../friendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {

  return <ul className={css.friendsList}>
    {
      friends.map(item => {
        return <li className={css.friendsListItem} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>;
      })
    }
  </ul>
}