const HeaderLastUpdate = (prop: { lastUpddate: string }) => {
  const { lastUpddate } = prop;
  return (
    <>
      <div className="bg-slate-100 w-2/12 py-1 flex rounded-xl justify-center ml-8">
        <h1 className="text-3xl flex justify-center py-2 font-semibold">
          {lastUpddate ? lastUpddate : null}
        </h1>
      </div>
    </>
  );
};

export default HeaderLastUpdate;
