import Image from "next/image"

const WeaklyOffers = () => {
  return (
    <div className="px-4">
      <div className="relative flex w-full" style={{ aspectRatio: 344 / 78 }}>
        <Image
          src="/images/weekly_offers_2.png"
          alt="Weekly offers"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default WeaklyOffers
