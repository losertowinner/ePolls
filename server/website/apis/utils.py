import random

months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]


def get_year_dict():
    year_dict = dict()

    for month in months:
        year_dict[month] = 0

    return year_dict


def generate_color_palette(amount):
    background_palette = []
    border_palette = []

    for _ in range(amount):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)

        rgba_color = f"rgba({r}, {g}, {b}, 0.2)"
        background_palette.append(rgba_color)

        rgb_color = f"rgb({r}, {g}, {b})"
        border_palette.append(rgb_color)

    return background_palette, border_palette
