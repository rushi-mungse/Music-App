import Feature from "../../components/Feature/Feature";
import MusicModel from "../../components/MusicModel/MusicModel";
import styles from "./Features.module.css";
const Features = () => {
  return (
    <MusicModel
      text={"An Amazing App Can Change Your Daily Life"}
      heading="Music Experience"
    >
      <div className={styles.features_container}>
        <Feature
          img={"mic"}
          heading="For Live Music"
          para={
            "Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus. Suspendisse."
          }
          link="/"
        />
        <Feature
          img={"music"}
          heading="For Daily Music"
          para={
            "Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque libero, sit amet laoreet lorem."
          }
          link="/"
        />
        <Feature
          img={"artist"}
          heading="For Artists"
          para={
            "Cras ullamcorper nisi accumsan, porta nulla nec, suscipit nibh. Nullam bibendum, diam eu vestibulum imperdiet"
          }
          link="/"
        />
      </div>
    </MusicModel>
  );
};

export default Features;
