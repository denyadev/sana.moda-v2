import React, {useState} from 'react'
import Project from '../Main/Project'
import {bracondale, eastyork, forest, richmond, sarnia, woodbridge} from '../../public/images'

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

const Projects = () => {
    const [openSarnia, setOpenSarnia] = React.useState(false);
    const [openRichmond, setOpenRichmond] = React.useState(false);
    const [openWoodbridge, setOpenWoodbridge] = React.useState(false);
    const [openEast, setOpenEast] = React.useState(false);
    const [openBracondale, setOpenBracondale] = React.useState(false);
    const [openForest, setOpenForest] = React.useState(false);

    const [border, setBorder] = React.useState(0);
    const [gap, setGap] = React.useState(12);
    const [borderRadius, setBorderRadius] = React.useState(0);

    return (
        <>
            <div className="grid grid-cols-3 place-items-center relative gap-4 px-32">
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenSarnia(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Sarnia Ontario</h4>
                    </div>
                    <Lightbox
                        open={openSarnia}
                        close={() => setOpenSarnia(false)}
                        slides={sarnia}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-5/6 h-full float-right">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259120/Sarnia%20Ontario%20project%203/4_oswrwt.webp" title="Sarnia Ontario" width="1920" height="1280"/>
                    </div>
                </article>
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenRichmond(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Richmond Hill Toronto</h4>
                    </div>
                    <Lightbox
                        open={openRichmond}
                        close={() => setOpenRichmond(false)}
                        slides={richmond}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-5/6 h-full">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259124/Richmond%20Hill%20Toronto%20project%201/001_t76tkj.webp" title="Richmond Hill Toronto" width="1920" height="1280"/>
                    </div>
                </article>
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenWoodbridge(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Woodbridge Toronto</h4>
                    </div>
                    <Lightbox
                        open={openWoodbridge}
                        close={() => setOpenWoodbridge(false)}
                        slides={woodbridge}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-5/6 h-full ml-16">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259119/Woodbridge%20Toronto%20project%204/1_onnlrx.webp" title="Woodbridge Toronto" width="1920" height="1283"/>               
                    </div>
                </article>
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenEast(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">East York Toronto</h4>
                    </div>
                    <Lightbox
                        open={openEast}
                        close={() => setOpenEast(false)}
                        slides={eastyork}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-5/6 h-full ml-4">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259122/East%20York%20Toronto%20project%205/1_mtuzmz.webp" title="East York Toronto" width="1000" height="750"/>
                    </div>
                </article>
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenBracondale(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Bracondale Hill Toront</h4>
                    </div>
                    <Lightbox
                        open={openBracondale}
                        close={() => setOpenBracondale(false)}
                        slides={bracondale}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-5/6 h-full float-right">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259123/Bracondale%20Hill%20toronto%20project%206/1_x7z5yu.webp" title="Bracondale Hill Toront" width="4435" height="2554"/>
                    </div>
                </article>
                <article className="h-[400px] w-full group relative">
                    <div className="w-full h-full absolute hover:bg-black/40 cursor-pointer" onClick={() => setOpenForest(true)}>
                        <h4 className="text-white text-lg tracking-widest opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Forest Hill North York</h4>
                    </div>
                    <Lightbox
                        open={openForest}
                        close={() => setOpenForest(false)}
                        slides={forest}
                        plugins={[Zoom, Counter, Captions]}
                        thumbnails={{border, gap, borderRadius}}
                        counter={{ style: { top: "unset", bottom: 0 } }}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
                    />
                    <div className="w-[35%] h-auto float-left ml-8 mt-8">
                        <Project image="https://res.cloudinary.com/dxqkbp6uv/image/upload/v1679259128/Forest%20Hill%20North%20Toronto%20project%202/1_sg8cyg.webp" title="Forest Hill North York" width="2976" height="5760"/>
                    </div>
                </article>
            </div>
        </>

  )
}

export default Projects