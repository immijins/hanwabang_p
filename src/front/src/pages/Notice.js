import Layout from "../layouts/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/notice.css"
import { Link } from "react-router-dom";

function Notice() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        axios.get('/notice')
            .then(response => {
                console.log(response.data); // 서버 응답 데이터 구조 확인
                if (Array.isArray(response.data)) {
                    // 최신순으로 정렬 (regDate를 기준으로)
                    const sortedNotices = response.data.sort((a, b) => new Date(b.regDate) - new Date(a.regDate));
                    setNotices(sortedNotices);
                } else {
                    console.error("Unexpected response data:", response.data);
                }
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, []);

    return (
        <Layout>
            <main className="notice_main">
                <section className="notice_section">
                    {/* 타이틀 */}
                    <p className="notice_tit">
                        공지사항
                    </p>
                    <ul className="notice_box">
                        <ul className="notice_box_tit">
                            <li>순번</li>
                            <li>제목</li>
                            <li>날짜</li>
                        </ul>
                        {notices.map((notice, index) => (
                            <ul key={notice.no} className="notice">
                                <li>{notices.length - index}</li> {/* 순번을 최신순으로 표시 */}
                                <li>
                                    <Link to={`/notice/${notice.no}`}>
                                        {notice.title}
                                    </Link>
                                </li>
                                <li>{notice.regDate}</li>
                            </ul>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}

export default Notice;