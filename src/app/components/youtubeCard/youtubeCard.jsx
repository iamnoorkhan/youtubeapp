import styles from './youtubeCard.module.css'
const YoutubeCard = (props) =>{
    const {videodata} = props
    console.log(props)
  return <div className={styles.card}>
    <div >
       <img className={styles.thumbnail} src= {videodata.thumbnailUrl} alt=" {videodata.title}" />
        </div>
    <div className={styles.title}>
        <p>{videodata.title}</p>
    </div>
    <div className={styles.channel}>
        <img className={styles.logo} src={videodata.channelLogoUrl} alt=" {videodata.channelName}" />
        <p>{videodata.channelName}</p>
    </div>
    <div className={styles.reaction}>
       <span className={styles.likes}>Likes : {videodata.likes/1000}k</span>
        <span>Views : {videodata.views/1000}k </span>
    </div>
  </div>
}
export default YoutubeCard;