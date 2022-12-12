import { Document, Tag } from "../documents/types";
import { uriToAction } from "../documents/utils";

const makeNycDocument = ({
  title,
  oaFilename,
  imgFilename
}: {
  title: string;
  oaFilename: string;
  imgFilename: string;
}): Document => ({
  title,
  documents: [
    {
      uri: uriToAction({
        uri: `https://document-storage.oa.gov.sg/national-youth-council_${oaFilename}`,
        permittedActions: ["VIEW"],
        redirect: "https://dev.verify.gov.sg/verify"
      }),
      kind: "verifiable",
      downloadUrl: `http://document-storage.oa.gov.sg/national-youth-council_${oaFilename}`
    }
  ],
  imageSrc: `/static/img/preview/nyc/${imgFilename}`,
  tags: [Tag.NYC_CERTS],
  version: "2"
});

export const documentsNyc: Document[] = [
  makeNycDocument({
    title: "OBS BCLS + AED",
    oaFilename: "bcls-aed.oa",
    imgFilename: "bcls-aed.jpg"
  }),
  makeNycDocument({
    title: "OBS Standard Firt Aid",
    oaFilename: "standard-first-aid.oa",
    imgFilename: "standard-first-aid.png"
  }),
  makeNycDocument({
    title: "OBS Wilderness Medical First Responder",
    oaFilename: "obs-wmfr.oa",
    imgFilename: "obs-wmfr.png"
  }),
  makeNycDocument({
    title: "OBS Campcraft and Navigation Training",
    oaFilename: "bit-campcraft-and-navigation.oa",
    imgFilename: "bit-campcraft-and-navigation.png"
  }),
  makeNycDocument({
    title: "OBS Soft Skills Programme",
    oaFilename: "bit-soft-skills.oa",
    imgFilename: "bit-soft-skills.png"
  }),
  makeNycDocument({
    title: "OBS Summary Certificate",
    oaFilename: "bit-summary-certificate.oa",
    imgFilename: "bit-summary-certificate.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 1 Recertification)",
    oaFilename: "cci-level-1-recert.oa",
    imgFilename: "cci-level-1-recert.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 1) Trainer",
    oaFilename: "cci-level-1-trainer.oa",
    imgFilename: "cci-level-1-trainer.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 1)",
    oaFilename: "cci-level-1.oa",
    imgFilename: "cci-level-1.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 2 Recertification)",
    oaFilename: "cci-level-2-recert.oa",
    imgFilename: "cci-level-2-recert.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 2) Trainer",
    oaFilename: "cci-level-2-trainer.oa",
    imgFilename: "cci-level-2-trainer.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Course Instructor (Level 2)",
    oaFilename: "cci-level-2.oa",
    imgFilename: "cci-level-2.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Ropes Course (Basic)",
    oaFilename: "crc-basic.oa",
    imgFilename: "crc-basic.png"
  }),
  makeNycDocument({
    title: "OBS East Coast Campus Instructor Training (EIT)",
    oaFilename: "crc-eit.oa",
    imgFilename: "crc-eit.png"
  }),
  makeNycDocument({
    title: "OBS Challenge Ropes Course (Leader)",
    oaFilename: "crc-leaders.oa",
    imgFilename: "crc-leaders.png"
  }),
  makeNycDocument({
    title: "OBS General Certificate",
    oaFilename: "general-certificate.oa",
    imgFilename: "general-certificate.png"
  }),
  makeNycDocument({
    title: "OBA MOC",
    oaFilename: "obs-moc.oa",
    imgFilename: "obs-moc.png"
  }),
  makeNycDocument({
    title: "OBS Certificate of Successful Completion",
    oaFilename: "successful-completion.oa",
    imgFilename: "successful-completion.png"
  })
];
