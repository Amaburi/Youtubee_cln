import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {Navbarr, VideoDetail, ChannelDetail, SearchFeed, Feed} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbarr/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
