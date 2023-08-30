export const UserFactory = function({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    first_name,
    last_name,
    phone_number,
    employment
}) {
    this.id = id ?? '';
    this.name = name ?? (first_name + ' ' + last_name);
    this.username = username ?? '';
    this.email = email ?? '';
    this.address = address.street_name ? {street: address.street_name, suite: address.street_address, city: address.city} : address;
    this.phone = phone ?? phone_number;
    this.website = website ?? 'random.org';
    this.company = company ?? {name: employment.title, catchPhrase: 'Victory belongs to the most persevering.'};
};