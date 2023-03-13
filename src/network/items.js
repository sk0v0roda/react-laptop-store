export async function loadItemsList(pageSize, offset) {
    const query = { pageSize, offset };
    if (!query.offset) delete query.offset;
    const params = new URLSearchParams(query);
    const url = `https://api.airtable.com/v0/appI4DczQ0dkNrcEJ/laptops?${params}`;
    const token = "patpVKRzccvBtl84c.4ef41b8440b77840ecba380cccf933d5a449ab3cabcce6a6608c5b4db3a45506";

    const response = await fetch(url, {headers: { Authorization: `Bearer ${token}`}});
    const data = await response.json();

    data.records = data.records.map(el => el.fields);

    return data;
}