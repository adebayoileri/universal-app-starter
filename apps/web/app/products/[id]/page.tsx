export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      Product ID: {id}
    </div>
  );
}
