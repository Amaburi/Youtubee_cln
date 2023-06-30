import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constant';

const VideoCard = ({video : {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: { xs: '100%', sm: '358px' ,md: '320px'}, boxShadow: 'none', borderRadius: '0'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia alt={snippet?.title} sx={{width: {xs:'100%', sm:'358px', md: '320px'}, height: 180}} image={snippet?.thumbnails?.high?.url}/>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0,55) || demoVideoTitle.slice(0, 55)}
            </Typography>
          </Link>

          <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle.slice(0,55) || demoChannelTitle.slice(0, 55)}
              <CheckCircle sx={{fontSize: 15, color: 'gray', ml:'5px'}}/>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard