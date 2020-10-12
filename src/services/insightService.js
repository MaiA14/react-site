import Insight from "./Insight";
import storageService from "./storageService";

export default {
  getInsights,
  getInsightById,
  editInsight,
  deleteInsight,
};

function createInsights() {
  const insights = [
    new Insight(
      1,
      "במאורה באדמה גר לו הוביט. לא מאורה מגעילה, מרופשת וטחובה, מלאה שלשלים מתחפרים וריח בוץ, וגם לא מאורה יבשה, חשופה וחולית שאין בה מקום לשבת או דבר לאכול: זאת היתה מאורת? הוביט, ומשמעות הדבר נוחות.",
      8,
      37
    ),
    new Insight(
      2,
      "היתה לה דלת עגולה דמוית צוהר, צבועה ירוק, ובדיוק במרכזה ידית פליז צהובה ונוצצת. הדלת נפתחה אל פרוזדור דמוי מנהרה שצורתו כצינור: מנהרה נעימה מאוד ונטולת עשן, עם קירות מחופים ורצפה מרוצפת מכוסה שטיח, מצוידת בכיסאות ממורקים ובהמוני מתלים לכובעים ולמעילים ההוביט היה מכניס אורחים.",
      2,
      24
    ),
    new Insight(
      3,
      "רוב הפרוזדור, אם כי לא כולו, התפתל למרחק רב לאורך צלע 'הגבעה' כך כינו אותה בני המקום אשר התגוררו מילין רבים מסביב לה ודלתות קטנות ועגולות רבות נפתחו ממנו מצדו האחד ומצדו האחר. לא היה צורך במדרגות בבית ההוביט.",
      5,
      28
    ),
  ];
  storageService.store("insights", insights);
  return insights;
}

let gInsights = storageService.load("insights") || createInsights();

function getInsights() {
  return Promise.resolve([...gInsights]);
}

function getInsightById(insightId) {
  const insight = gInsights.find((insight) => insight.id === +insightId);
  return Promise.resolve(insight);
}

function editInsight(id, content) {
  let editInsight = gInsights.find((insight) => insight.id === id);
  editInsight = {
    ...editInsight,
    content,
  };
  gInsights = gInsights.map((insight) =>
    editInsight.id === insight.id ? editInsight : insight
  );
  storageService.store("insights", gInsights);
  return Promise.resolve(editInsight);
}

function deleteInsight(insight) {
  gInsights = gInsights.filter((currInsight) => currInsight.id !== insight.id);
  storageService.store("insights", gInsights);
  return Promise.resolve(true);
}
