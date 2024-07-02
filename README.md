## 🖥한과방 웹사이트 제작
'한과방' 떡/요리학원 업체를 소개하는 웹사이트입니다.

Spring Boot를 활용하여 Backend - 관리자페이지 및 게시판(떡 박물관, 공지사항) CRUD를 구현하였고,
React를 활용하여 Frontend - 사용자페이지(반응형)를 제작하였습니다.
실제 사용될 사이트로 **GitHub 코드는 일부 공개**되어있습니다.

사이트 링크 : <https://hanwabang.com/>

## 📂프로젝트 소개
업체를 홍보할 수 있도록 사용자가 보는 사용자페이지와 관리자가 게시글을 관리할 수 있는 관리자페이지로 구성되어 있습니다.
웹사이트 기획부터 디자인, 개발, 배포까지 100% 개인 프로젝트로 진행하였습니다.
- 컨셉 : 전통 떡집 분위기를 살려 부드러운 느낌을 주는 컬러와 전통미를 살릴 수 있는 폰트와 라인 사용
- 개발 기간 : 3주(기획, 디자인, 구현, 배포)
- 참여도 : 100% (개인 프로젝트)

## ⚙기술스택
**Tool :** Figma, Illustrator, IntelliJ IDEA

**Framework/Library :** Spring Boot, Spring Security, Thymeleaf, React, axios

**DataBase :** MariaDB

**Deployment :** AWS

## 📊주요 기능
- 사용자 페이지 
  - 정보 전달 - 메인페이지, 업체소개, 오시는길, 주문/판매, 수업/체험
  - 게시판 페이지 - 떡 박물관, 공지사항 : 관리자페이지와 연동, 관리자페이지에서 게시글 관리(json, axios)
- 관리자 페이지 
  - 관리자 로그인 : SpringSecurity - 관리자 계정으로 로그인 시 접근 가능
  - 떡 박물관 게시판 관리 : 게시글 CRUD 기능(이미지 파일 추가, 페이징 처리)
  - 공지사항 게시판 관리 : 게시글 CRUD 기능(이미지 파일 추가, 페이징 처리)
  - 데이터베이스 저장 : 변경된 게시글 관련 내용이 AWS 데이터베이스에 저장되어 사용자 페이지와 연동

![기능](https://github.com/immijins/hanwabang_p/blob/main/%EA%B8%B0%EB%8A%A5.jpg)

## 🗃아키텍처
![아키텍처](https://github.com/immijins/hanwabang_p/blob/main/%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.png)

Front - React(useState, props) / Back - Spring Boot / Deployment - AWS DB, HTTPS 보안, 도메인 연결

## 🔗DB
ERD

![DB](https://github.com/immijins/hanwabang_p/blob/main/db.png)

## 📋API 설계 구조
![api](https://github.com/immijins/hanwabang_p/blob/main/api.png)

## 💻구현 화면

- 메인화면 PC버전/Mobile버전
![main](https://github.com/immijins/hanwabang_p/blob/main/main.jpg)

- 게시판 1. 공지사항

  - 공지사항 관리자페이지 - 글 추가
![notice](https://github.com/immijins/hanwabang_p/blob/main/%EA%B2%8C%EC%8B%9C%EA%B8%80%20%EA%B4%80%EB%A6%AC%EC%9E%90.png)

  - 공지사항 사용자페이지 
![notice2](https://github.com/immijins/hanwabang_p/blob/main/notice.jpg)

- 게시판 2. 떡 박물관

  - 떡 박물관 관리자/사용자 페이지
![museum](https://github.com/immijins/hanwabang_p/blob/main/museum.jpg)

✔ localhost를 통한 관리자페이지 이미지 업로드 기능은 구현이 완료되었으나, 
AWS 배포에 이미지 업로드는 localhost와 방식이 달라 현재 미구현 > 임시 이미지 추가로 업로드 상태입니다.

- 추가 화면 <https://hanwabang.com/>

## 📌회고 및 피드백
React와 Spring Boot를 연결하여 구현하는 첫 프로젝트여서 프로젝트 생성부터 배포과정까지 우여곡절이 많았지만, 프로젝트를 진행하면서 알게된 점이 많았습니다.
부족한 점으로는 localhost 상으로는 구현이 되는 이미지 업로드가 AWS 배포 시 적용이 안되는 부분이 있어 이 부분을 수정하기 위해 추가적으로 작업을 진행하고 있습니다.
이후 리팩토링 작업으로 API 방식을 POST, GET, PUT, PATCH, DELETE를 사용한 RESTful API 방식으로 수정, 코드 간결화 중복 최소화 작업을 진행할 예정입니다.
메인페이지 하단 이미지 나열된 영역은 인스타그램 API 연동을 위해 생성해둔 영역으로 이후 작업 시 인스타그램 연동 작업 예정입니다.

