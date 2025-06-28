const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "main");

Player.Update.hook((original, self, i) => {
    original(self, i);

    const head = self.armor[10];
    const body = self.armor[11];
    const legs = self.armor[12];

    // Helper to safely access stat or return 0
    const safe = (val) => typeof val === "number" ? val : 0;

    // Apply defense
    self.statDefense += safe(head.defense) + safe(body.defense) + safe(legs.defense);

    // Apply melee speed
    self.meleeSpeed += safe(head.meleeSpeed) + safe(body.meleeSpeed) + safe(legs.meleeSpeed);

    // Apply melee damage
    self.meleeDamage += safe(head.meleeDamage) + safe(body.meleeDamage) + safe(legs.meleeDamage);

    // Apply ranged damage
    self.rangedDamage += safe(head.rangedDamage) + safe(body.rangedDamage) + safe(legs.rangedDamage);

    // Apply magic damage
    self.magicDamage += safe(head.magicDamage) + safe(body.magicDamage) + safe(legs.magicDamage);

    // Apply summon damage
    self.minionDamage += safe(head.minionDamage) + safe(body.minionDamage) + safe(legs.minionDamage);

    // Apply crit chances
    self.meleeCrit += safe(head.meleeCrit) + safe(body.meleeCrit) + safe(legs.meleeCrit);
    self.rangedCrit += safe(head.rangedCrit) + safe(body.rangedCrit) + safe(legs.rangedCrit);
    self.magicCrit += safe(head.magicCrit) + safe(body.magicCrit) + safe(legs.magicCrit);

    // Apply movement speed
    self.moveSpeed += safe(head.moveSpeed) + safe(body.moveSpeed) + safe(legs.moveSpeed);

    // Apply max life/mana
    self.statLifeMax2 += safe(head.life) + safe(body.life) + safe(legs.life);
    self.statManaMax2 += safe(head.mana) + safe(body.mana) + safe(legs.mana);

    // Apply mana cost reduction
    self.manaCost -= safe(head.manaCost) + safe(body.manaCost) + safe(legs.manaCost);

    // Apply damage reduction (endurance)
    self.endurance += safe(head.endurance) + safe(body.endurance) + safe(legs.endurance);
});
