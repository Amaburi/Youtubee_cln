import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCardd } from './';
import { fetchFromApi } from '../utils/Api';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    fetchFromApi(`channel?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));

  }, [id]) 
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ zIndex: 10, height: '300px'}}/>
        <ChannelCardd marginTop="-105px" channelDetail={channelDetail}/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail