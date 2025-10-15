type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ItemProps = {
  data: ServiceItem;
};

const Item: React.FC<ItemProps> = ({ data }) => {
    return (
        <div className="max-w-[252px] flex flex-col items-start space-x-4 my-8 p-[1px] rounded-2xl bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)]">
            <div className="bg-[var(--color-background-secondary)] rounded-2xl py-6 px-4">
                <div className="w-full flex justify-center items-start">
                    {data.icon}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <h3 className="text-lg text-center uppercase font-semibold text-[var(--color-foreground)]">{data.title}</h3>
                    <p className="mt-2 text-[var(--color-foreground-secondary)] text-base leading-relaxed">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;