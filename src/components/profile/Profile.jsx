import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return <div className={css.card}>
    <div>
      <img className={css.profileImage}
        src={image}
        alt="User avatar"
      />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileTag}>@{tag}</p>
      <p className={css.profileLocation}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statItem}>
        <span className={css.statLabel}>Followers</span>
        <span className={css.statValue}>{stats.followers}</span>
      </li>
      <li className={css.statItem}>
        <span className={css.statLabel}>Views</span>
        <span className={css.statValue}>{stats.views}</span>
      </li>
      <li className={css.statItem}>
        <span className={css.statLabel}>Likes</span>
        <span className={css.statValue}>{stats.likes}</span>
      </li>
    </ul>
  </div>

}