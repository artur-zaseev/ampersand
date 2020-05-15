import data from "../modules/Data";

export const syncFaq = () => {
  let allFaq = data.faq.map(faq => faq);
  return {
    type: "FAQ_SYNC",
    payload: allFaq
  };
};
