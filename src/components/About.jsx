import AboutGif from "../assets/AboutGif.gif"

const About = () => {

    const description = "I'm a full-stack developer with expertise in HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, and MongoDB. I specialize in creating responsive user interfaces and building robust server-side applications with secure APIs. My database management skills include designing scalable architectures with MongoDB. Contributing to various projects highlights my problem-solving abilities and commitment to quality. Engaged in the open-source community, I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/264141683-8aa99f6c-267d-4977-9cd3-1a4c11675863.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNjQxNDE2ODMtOGFhOTlmNmMtMjY3ZC00OTc3LTljZDMtMWE0YzExNjc1ODYzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFjZGI3MTk3ODIxN2E3NzE3NjNkMTA2MmFmYmI4OGZlMTVmYjEyMDFhMmE0MjU2OGNiMWNhY2Y2NzQ2ZjlhYjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.G_LqxAcMEp-_Datw9J6j3cnye4K7H2H7zFjwuCDXyBQ"
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/241764371-9d0fd0c4-5c7f-4122-b884-64a1e1685d2d.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNDE3NjQzNzEtOWQwZmQwYzQtNWM3Zi00MTIyLWI4ODQtNjRhMWUxNjg1ZDJkLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0MzIzYTE4ODNkN2I5NGFkYzg5MDFiNTE2YTE0N2I1OWE3ZGYwMDgxMDE2NTljOWNlYjlhNGE3NTBhYWExNzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6_gYBttatoi3oAPD7fHexHM84FpGG0_oGG8oL7uHzWs"
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/238353467-897cd757-ea1f-492d-aaf9-6d1674177e08.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yMzgzNTM0NjctODk3Y2Q3NTctZWExZi00OTJkLWFhZjktNmQxNjc0MTc3ZTA4LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFkOTk5NDhjZjdkNWExMTE0ZDMzOWMxZDM4OTc4ZTY3NjA5NjJiMTA0YzA0MDVmOTY4ZGNmOTEwY2JlMWE0ZWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1ad1n2sPfLl12-hYfn0831TZhkuFfXMo4qtKG-rUImM"
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/238353480-219bcc70-f5dc-466b-9a60-29653d8e8433.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yMzgzNTM0ODAtMjE5YmNjNzAtZjVkYy00NjZiLTlhNjAtMjk2NTNkOGU4NDMzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyOGE5YjUwMDU2NzljYWVlZDc0YzAwZjQyMWQyNjI4MDUxMmEwZDAyMzg2MDRlYjhmMTkyZjNkOGNlZWMzZDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.RBbYQfFMoGUrsTxX_kYncIr9aqTDyARmrFHww3rVJh4"
    // const imgSrc = 'https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2b04-4e3b-93ca-ac14705da224.gif'
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif"
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/212746035-d5c61762-973c-44c0-aec7-887f3b7690e3.gif"

    return (
        <div className="flex justify-center items-center py-20 lg:py-40 bg-[#fff]" id="about">

            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row max-w-[90%] md:max-w-[66rem]">

                <div className="flex pt-1 pb-10 lg:pb-0 lg:pt-0 justify-center lg:justify-normal w-full lg:pl-7 lg:w-1/2">
                    <img
                        src={AboutGif}
                        alt="about image"
                        className="w-[90%] h-auto md:h-80 md:w-[420px] rounded-xl border-4 border-l-violet-200 border-b-lime-200 border-r-orange-200 border-t-green-200"
                    />
                </div>

                <div className="flex flex-col md:max-w-[36rem] lg:w-1/2">
                    <span className="text-[#147efb] font-bold mb-3 lg:mb-1.5 text-center lg:text-start">ABOUT ME</span>
                    <span className="text-2xl font-extrabold text-[#2d2e32] px-2 lg:px-0 mb-5 lg:mb-3 text-center lg:text-start">A dedicated Full-Stack MERN Developer based in India 📍</span>
                    <p className="font-[Mulish,sans-serif] font-medium text-[#767676] text-center lg:text-start">{description}</p>
                </div>

            </div>

        </div>
    )
}

export default About