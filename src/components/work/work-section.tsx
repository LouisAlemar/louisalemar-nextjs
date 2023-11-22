import Circle from "../ui/circle";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styles from '../../styles/components/work/Work.module.scss';
import Button from "../ui/button";
import Loader from "../ui/loader";
import ProjectItem from "./project-item";

const WorkSection = () => {
  const projects = useSelector((state: RootState) => state.work.data);
  const loading = useSelector((state: RootState) => state.work.loading);
  const error = useSelector((state: RootState) => state.work.error);

  return (
    <section id="work" className={styles['work-section']}>
      <Circle color="gray" topPosition={"-5rem"} />
      <div className="container">
        <div className={styles['work-header']}>
          <h2>My Work</h2>
        </div>
        <p>Welcome to my digital portfolio, a showcase of innovative web development projects that blend creativity and technical expertise.</p>
        {loading && <Loader />}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-7 ${styles['project-listing-container']}`}>
          {error && <p>Error!</p>}
          {projects.map((project) => {
            return <ProjectItem key={project.id} {...project} />
          })}
        </div>
        <Button href="mailto:louisalemar@gmail.com?subject=Requesting%20more%20information%20about%20your%20services!" isPrimary={false}>Start Consulting</Button>
      </div>
    </section>
  )
}

export default WorkSection