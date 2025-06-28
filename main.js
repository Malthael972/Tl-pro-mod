const Player = new NativeClass("Terraria", "Player");
const Item = new NativeClass("Terraria", "Item");

if (Player.Update && Player.Update.hook) {
    Player.Update.hook((original, self, i) => {
        original(self, i);

        const vanityHead = self.armor[10];
        const vanityBody = self.armor[11];
        const vanityLegs = self.armor[12];

        // Add defense from vanity slots
        self.statDefense += (vanityHead.defense + vanityBody.defense + vanityLegs.defense);

        // Apply individual bonuses
        if (vanityHead.type > 0) Item.create(vanityHead.type).updateEquip(self);
        if (vanityBody.type > 0) Item.create(vanityBody.type).updateEquip(self);
        if (vanityLegs.type > 0) Item.create(vanityLegs.type).updateEquip(self);

        // Check and apply set bonus
        const headItem = Item.create(vanityHead.type);
        const bodyItem = Item.create(vanityBody.type);
        const legsItem = Item.create(vanityLegs.type);

        if (bodyItem.isArmorSet && bodyItem.isArmorSet(headItem, legsItem)) {
            bodyItem.updateArmorSet(self);
        }
    });
}
