import React from "react";
import { Suspense, lazy} from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import NoticeDetail from "../pages/NoticeDetail";

const Loading = () => <div>Loding...</div>;
const Main = lazy(() => import("../pages/Main"));

const Intro = lazy(() => import('../pages/story/Intro'));
const Museum = lazy(() => import('../pages/story/Museum'));
const Map = lazy(() => import('../pages/story/Map'));

const Rice = lazy(() => import('../pages/order/Rice'));
const Give = lazy(() => import('../pages/order/Give'));
const Celebrate = lazy(() => import('../pages/order/Celebrate'));

const Special = lazy(() => import('../pages/class/Special'));
const Dessert = lazy(() => import('../pages/class/Dessert'));
const Cook = lazy(() => import('../pages/class/Cook'));
const Experience = lazy(() => import('../pages/class/Experience'));

const Notice = lazy(() => import('../pages/Notice'));

const root = createBrowserRouter([
    {   // main 일 때 실행시키는 화면
        path: "/",
        element: <Suspense fallback={<Loading/>}><Main /></Suspense>
    },
    {   // 한과방이야기 - 소개 (story)
        path: "story/intro",
        element: <Suspense fallback={<Loading/>}><Intro /></Suspense>
    },
    {   // 박물관 (story/museum)
        path: "story/museum",
        element: <Suspense fallback={<Loading/>}><Museum/></Suspense>
    },
    {   // 오시는 길 (story/map)
        path: "story/map",
        element: <Suspense fallback={<Loading/>}><Map/></Suspense>
    },
    {   // 주문/판매 - 떡/한과 (order)
        path: "order/rice",
        element: <Suspense fallback={<Loading/>}><Rice/></Suspense>
    },
    {   // 답례/선물 (give)
        path: "order/give",
        element: <Suspense fallback={<Loading/>}><Give/></Suspense>
    },
    {   // 기념 (celebrate)
        path: "order/celebrate",
        element: <Suspense fallback={<Loading/>}><Celebrate/></Suspense>
    },
    {   // 수업/체험 - 전문과정 (special)
        path: "class/special",
        element: <Suspense fallback={<Loading/>}><Special/></Suspense>
    },
    {   // 디저트 (dessert)
        path: "class/dessert",
        element: <Suspense fallback={<Loading/>}><Dessert/></Suspense>
    },
    {   // 클래스 (cook)
        path: "class/cook",
        element: <Suspense fallback={<Loading/>}><Cook/></Suspense>
    },
    {   // 출강/체험(experience)
        path: "class/experience",
        element: <Suspense fallback={<Loading/>}><Experience/></Suspense>
    },
    {   // 공지사항 (notice)
        path: "notice",
        element: <Suspense fallback={<Loading/>}><Notice/></Suspense>
    },
    {   // 공지사항 개별
        path: "notice/:no",
        element: <Suspense fallback={<Loading/>}><NoticeDetail/></Suspense>
    }

])

export default root;