import { abilities } from "../Constants/index"

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map(({imgPath,title,desc}) => (
                <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={imgPath} alt={title} className="w-16 h-16" />
                    </div>
                    <h3 className="font-semibold text-2xl text-white">{title}</h3>
                    <p className="text-lg text-white-50">{desc}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default FeatureCards
