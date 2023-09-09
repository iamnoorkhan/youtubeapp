import YoutubeCard from "../youtubeCard/youtubeCard";
import styles from './youtbeApp.module.css'
const YoutubeApp = (props) =>{
    const {data} = props
     return <div className={styles.container}>
        {
            data.map(video => <YoutubeCard videodata = {video}/>)
        }
     </div>


}
export default YoutubeApp;