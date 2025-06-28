const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");
const Item = new NativeClass("Terraria", "Item");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const head = self.armor[10];  // Vanity head
    const body = self.armor[11];  // Vanity body
    const legs = self.armor[12];  // Vanity legs

    // Add defense from vanity slots
    self.statDefense += (head.defense + body.defense + legs.defense);

    // Create Item instances from vanity armor
    const headItem = Item.create(head.type);
    const bodyItem = Item.create(body.type);
    const legItem = Item.create(legs.type);

    // Apply individual bonuses from each piece
    headItem.updateEquip(self);
    bodyItem.updateEquip(self);
    legItem.updateEquip(self);

    // Apply armor set bonus if valid set
    if (bodyItem.isArmorSet(headItem, legItem)) {
        bodyItem.updateArmorSet(self);
    }
});
