const About = () => {

    const description = "As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."
    // const imgSrc = "https://user-images.githubusercontent.com/74038190/264141683-8aa99f6c-267d-4977-9cd3-1a4c11675863.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNjQxNDE2ODMtOGFhOTlmNmMtMjY3ZC00OTc3LTljZDMtMWE0YzExNjc1ODYzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFjZGI3MTk3ODIxN2E3NzE3NjNkMTA2MmFmYmI4OGZlMTVmYjEyMDFhMmE0MjU2OGNiMWNhY2Y2NzQ2ZjlhYjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.G_LqxAcMEp-_Datw9J6j3cnye4K7H2H7zFjwuCDXyBQ"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/241764371-9d0fd0c4-5c7f-4122-b884-64a1e1685d2d.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNDE3NjQzNzEtOWQwZmQwYzQtNWM3Zi00MTIyLWI4ODQtNjRhMWUxNjg1ZDJkLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0MzIzYTE4ODNkN2I5NGFkYzg5MDFiNTE2YTE0N2I1OWE3ZGYwMDgxMDE2NTljOWNlYjlhNGE3NTBhYWExNzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6_gYBttatoi3oAPD7fHexHM84FpGG0_oGG8oL7uHzWs"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/238353467-897cd757-ea1f-492d-aaf9-6d1674177e08.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yMzgzNTM0NjctODk3Y2Q3NTctZWExZi00OTJkLWFhZjktNmQxNjc0MTc3ZTA4LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFkOTk5NDhjZjdkNWExMTE0ZDMzOWMxZDM4OTc4ZTY3NjA5NjJiMTA0YzA0MDVmOTY4ZGNmOTEwY2JlMWE0ZWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1ad1n2sPfLl12-hYfn0831TZhkuFfXMo4qtKG-rUImM"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/238353480-219bcc70-f5dc-466b-9a60-29653d8e8433.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yMzgzNTM0ODAtMjE5YmNjNzAtZjVkYy00NjZiLTlhNjAtMjk2NTNkOGU4NDMzLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyOGE5YjUwMDU2NzljYWVlZDc0YzAwZjQyMWQyNjI4MDUxMmEwZDAyMzg2MDRlYjhmMTkyZjNkOGNlZWMzZDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.RBbYQfFMoGUrsTxX_kYncIr9aqTDyARmrFHww3rVJh4"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/212748842-9fcbad5b-6173-4175-8a61-521f3dbb7514.gif"

    // const imgSrc = 'https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2b04-4e3b-93ca-ac14705da224.gif'

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/212751381-b0b2320e-6ef6-4041-a77a-de279fe5d3ae.gif"


    // const imgSrc = "https://user-images.githubusercontent.com/74038190/212750996-938b257b-266c-45a7-9af7-655341c0f58b.gif"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/243078834-72903324-cf57-4e90-80a6-ed3c9734e0ed.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNDMwNzg4MzQtNzI5MDMzMjQtY2Y1Ny00ZTkwLTgwYTYtZWQzYzk3MzRlMGVkLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRjYTkzZDY1MTFlY2MwYTIzNTgxMDkyMmMxMTU5N2M0MTU4MGQzZTI1NjFjM2QxMjhjMmNiNDVmMTIyZDIzYzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.G-n3ilrFwgZVeVXONekte9NJWZyCk152oP3Xf7rM8GY"


    // const imgSrc = "https://user-images.githubusercontent.com/74038190/238355349-7d484dc9-68a9-4ee6-a767-aea59035c12d.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yMzgzNTUzNDktN2Q0ODRkYzktNjhhOS00ZWU2LWE3NjctYWVhNTkwMzVjMTJkLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ0NjU4NWZkYjMzYmFlZDMwM2FkYTE2NGE2Y2ViY2JkNjIwODUwNGMwZmZiYjFjODJjMGFmOTNkMjZiODk3ZTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dyESNP6mNEu6KNgTilnO_FX9VUwQ4hAN-b5gLR6CUUM"


    // const imgSrc = "https://user-images.githubusercontent.com/74038190/240304579-c288471c-be67-4fbb-af44-1c63ee9ed280.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yNDAzMDQ1NzktYzI4ODQ3MWMtYmU2Ny00ZmJiLWFmNDQtMWM2M2VlOWVkMjgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZmODRhY2YzYWY0Y2Q1NWQ2YmUxMTg4MGVjYTc2YjFjZDY0ZmYxYTU4MDQ1NDllYmFiYjdmOWY2Nzg5MDhiZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VHG2R_hOjQalqfI1JaIKuGnkwy_7mPaRNLIVnxVkkpY"

    const imgSrc = "https://user-images.githubusercontent.com/74038190/212746035-d5c61762-973c-44c0-aec7-887f3b7690e3.gif"

    return (
        <div className="flex justify-center items-center py-20 lg:py-40 bg-[#fff]">

            <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row max-w-[61rem]">

                <div className="flex pt-1 pb-10 lg:pb-0 lg:pt-0 justify-center lg:justify-normal  lg:pl-7 w-full lg:w-1/2">
                    <img
                        src={imgSrc}
                        alt="about image"
                        className="w-[90%] h-auto md:h-80 md:w-[420px] rounded-xl border-gray-200 border-4"
                    />
                </div>

                <div className="flex flex-col md:max-w-[36rem] lg:w-1/2 lg:pr-2">
                    <span className="text-lg text-[#147efb] font-bold mb-3 lg:mb-2 text-center lg:text-start">ABOUT ME</span>
                    <span className="text-2xl font-extrabold text-[#2d2e32] px-2 lg:px-0 mb-5 lg:mb-4 text-center lg:text-start">A dedicated Full-Stack MERN Developer based in India 📍</span>
                    <p className="font-[Mulish,sans-serif] font-medium text-[#767676] text-center lg:text-start px-2 lg:px-0">{description}</p>
                </div>

            </div>

        </div>
    )
}

export default About