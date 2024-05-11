import { ReactElement } from "react";

export type CvElement = {
    label: string;
    company: string;
    time: string;
    description: ReactElement;
}

export function getWork(){
return [ubs, johu]
}

export function workMore(){
    return [mercedes, rmf, viva, rolnik]
}

export function getEducation(){
    return [im, iie]
}

export function eduMore(){
    return []
}

export function getSkills(){
    return [dev, soft]
}

export function skillsMore(){
    return []
}

// CV Elements below:

// Skills:

const dev: CvElement = {
    label: "Software Development",
    company: "",
    time: "",
    description: (<>{renderSkills(
        ["Javascript", "TypeScript", "React", "Bootstrap", "HTML", "CSS", "JSON", "GIT, GitHub, GitLab"]
    )}</>)
}

const soft: CvElement = {
    label: "Soft Skills",
    company: "",
    time: "",
    description: (<>{renderSkills(
        ["Agile", "Kanban", "Scrum", "Public Speaking", "Emotional Intelligence", "Knowledge Sharing"]
    )}</>)
}

// Work items:

const ubs: CvElement = {
    label: "Web Miner, Software engineer",
    company: "UBS Business Solutions Poland sp. z o.o.",
    time: "Dec 2018 - Present",
    description: (<>
        <p>
            Developing and providing full life cycle of web scraping robots with RPA tools and dedicated web scraping
            platforms based on Python (in 2018-2019) or Java Script (in 2024):
            <ul>
                <li>collecting requirements, creating, testing and implementing robots</li>
                <li>writing documentation</li>
                <li>regular monitoring and maintenance, adjusting, optimization, processes documentation</li>
            <li>decommission of unnecessary robots and projects</li>
        </ul>
    </p><p>
        Analizyng websites and web applications in terms of:
        <ul>
            <li>architecture, structure</li>
            <li>used technologies</li>
            <li>API</li>
        </ul>
    </p>
    <p>Basic analysis and quality control of data (with SQL) and cooperation with teams involved in further analysis and data processing.</p>
    <p>Developing and maintaining tools for web miners with using Python.</p>
    <p>Audit and improving processes of handling robots and data. Implementation and adjusting new solutions.</p>
    <p>PProviding trainings for coworkers, onboarding new joiners in team as a onboarding buddy.</p>
    <p>Implementation of agile solutions (Scrum-based) and project management in R&D projects.</p>
    </>)
}

const johu: CvElement = {
    label: "Founder, Software Developer",
    company:"JoHu Apps",
    time: "Apr 2018 - Nov 2018",
    description: (<>
    <p>
        Start-up within the Akademickie Inkubatory Przedsiębiorczości (AIP).<br></br>
        Brand created to implement ideas that emerged during my participation in the <a href="https://drive.google.com/file/d/13VpLExOIoHG8hxaV-c5ikUBzWsHxcuKZG5g8fJchkzntT2DtjcnzaXe5Ix8vnXT0XLCJyI2Yr9xpYCI-/view">Android Basics Nanodegree by Google</a>.
    </p><p>
      Creating, designing and implementation of mobile applications for Android (for versions Nougat, Oreo, Pie).
    </p>
    </>)
}

// Work more items:

const mercedes: CvElement = {
    label: "Barista",
    company:"We Just Love Coffee",
    time: "May 2018 - Nov 2018",
    description: (<>
        <p>
            Part-time job as a barista at the <i>Salon i Serwis Mercedes-Benz Sobiesław Zasada Automotive</i>.
        </p>
    </>)
}

const rmf: CvElement = {
    label: "Internship in Marketing Department",
    company:"Grupa RMF",
    time: "Aug 2012 - Sep 2012",
    description: (<>
        <p>
            Summer internship for the winners of the 2nd edition of the <i>Akademia Mediów RMF</i> project organized by the <i>Grupa RMF</i> and <i>Uniwersytet Ekonomiczny w Krakowie</i>.
        </p><p>
            Cooperation with the Marketing department as part of ongoing projects, in particular analysis of marketing data.
        </p>
    </>)
}

const viva: CvElement = {
    label: "E-promotion & E-marketing Specialis",
    company:"Vivalavita Sp. z o.o.",
    time: "May 2011 - Jul 2011",
    description: (<>
        <p>

        </p>
    </>)
}

const rolnik: CvElement = {
    label: "Trainee in Market Information Department",
    company:"Małopolski Ośrodek Doradztwa Rolniczego Powiatowy Zespół Doradztwa Rolniczego w Tarnowie",
    time: "Jul 2010 - Aug 2010",
    description: (<>
        <p>

        </p>
    </>)
}

// Education items:

const im: CvElement = {
    label: "Management",
    company:"Krakow University of Economics",
    time: "2012-2015",
    description: (<p>
        Master's degree<br></br>
        specialty: International Marketing
        </p>)
}

const iie: CvElement = {
    label: "Information Technology and Econometrics",
    company:"Krakow University of Economics",
    time: "2007-2012",
    description: (<p>
        Bachelor's degree<br></br>
        specialty: Information economics
        </p>)
}


// Helper functions:
function renderSkills(skills: string[]){
    return (
        <div className="container text-center">
            <div className="row row-cols-auto">
                <h6>#</h6>
                {skills.map((skill) => (
                    <>
                        <div className="col">{skill}</div>
                        <h6>#</h6>
                    </>
                ))}
            </div>
        </div>
    )
}
