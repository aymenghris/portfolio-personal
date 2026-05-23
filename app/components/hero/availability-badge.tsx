import Image from "next/image"

export const AvailabilityBadge = () => (
    <div className="flex items-center gap-3">
        <figure className="size-9 overflow-hidden rounded-lg bg-zinc-700">
            <Image
                src="/moon.png"
                width={40}
                height={40}
                alt="aymen ghris portrait"
                className="size-full object-cover"
            />
        </figure>

        <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
            <span className="relative size-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
            </span>
            Available for work
        </div>
    </div>
)
