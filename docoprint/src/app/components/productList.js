import Card from './card';

export default function ServiceList() {
  return (
    <div className="space-y-4">
      <Card
        title="Assignments"
        price="Rs. 5/page"
        quality="90 GSM"
        size="A4"
        imgSrc="/assignment.png"
      />
      <Card
        title="Poster Printing"
        price="Rs. 30/page"
        quality="300gsm"
        size="A4 | A3 | A2"
        imgSrc="/assignment.png"
      />
      <Card
        title="Passport Size Photos"
        price="Rs. 50"
        quality="25 photos"
        size="Photo size"
        imgSrc="/assignment.png"
      />
    </div>
  );
}
