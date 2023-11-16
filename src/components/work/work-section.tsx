import Circle from "../ui/circle"

import styles from '../../styles/components/work/Work.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProjectItem from "./project-item";
import Button from "../ui/button";

const WorkSection = () => {
  const projects = useSelector((state: RootState) => state.data.allData.projects);
  const loading = useSelector((state: RootState) => state.data.loading);
  const error = useSelector((state: RootState) => state.data.error);

  return (
    <section className={styles['work-section']}>
      <Circle color="gray" topPosition={"-5rem"} />
      <div className="container">
        <div className={styles['work-header']}>
          <h2>My Work</h2>
        </div>
        <p>Eu viverra integer dolor feugiat. In phasellus dictum cursus non. Non nibh quam a fermentum interdum. Non sed quisque magna in.</p>
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-7 ${styles['project-listing-container']}`}>
          {loading && <p>Loading...</p>}
          {error && <p>Error!</p>}
          {projects.map((project) => {
            return <ProjectItem key={project.projectId} {...project} />
          })}
        </div>
        <Button isPrimary={false}>Start Consulting</Button>
      </div>
    </section>
  )
}

export default WorkSection